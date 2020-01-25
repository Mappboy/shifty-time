import { addDays, eachDayOfInterval, parseISO } from 'date-fns';
// NOTE: We should add an expiry here so we only fetch if need
const getRootState = () => ({
  shift: { id: '', dates: { range: { start: new Date(), end: addDays(new Date(), 7) } } },
  user: { name: '', email: '', googleCalAvailable: false },
  /**
   * @typedef Person
   * @property {string} name
   * @property {string} email
   * @property  {boolean} googleCalAvailable
   */
  attendees: [],
  availabilities: [],
  errors: [],
});

export const state = getRootState;
export const getters = {
  attendeeEmails: (state) => {
    if (state.attendees.length) {
      return state.attendees.map((a) => {
        if (a) {
          return a.email;
        }
      });
    } else {
      return [];
    }
  },
  getDateRange: (state) => {
    if (!state.shift.dates.range) {
      return {};
    }
    return { start: parseISO(state.shift.dates.range.start), end: parseISO(state.shift.dates.range.end) };
  },
  getDateInterval: (state) => {
    if (!state.shift.dates.range) {
      return {};
    }
    return eachDayOfInterval({
      start: parseISO(state.shift.dates.range.start),
      end: parseISO(state.shift.dates.range.end),
    });
  },
};

export const mutations = {
  addAttendee: (state, attendee) => {
    state.attendees.push(attendee);
  },
  addError: (state, error) => {
    state.errors.push(error);
  },
  spliceAttendee: (state, index) => {
    state.attendees.splice(index, 1);
  },
  setAttendees: (state, attendees) => (state.attendees = attendees),
  setAvailabilities: (state, availabilities) => (state.availabilities = availabilities),
  setShiftId: (state, shift) => (state.shift.id = shift.id),
  setDateRange: (state, daterange) => (state.shift.dates.range = daterange),
  setUser: (state, user) => (state.user = user),
  setUserEmail: (state, email) => (state.user.email = email),
  setUserName: (state, name) => (state.user.name = name),
  resetState(state) {
    Object.assign(state, getRootState());
  },
};

export const actions = {
  async getShift({ commit, state }) {
    if (!state.shift.id) {
      const { data } = await this.$axios.get('https://localhost:3000/shifts');
      commit('setShiftId', data);
    }
  },
  /*
 Create sharelink values
 */
  async shareLink({ commit, state }) {
    const shareData = {
      title: 'A Shifty Invite',
      text: 'Your friend wants to hang out with you!',
      url: `https://${process.env.BASEURL}/shifts/${state.shift.id}`,
    };
    try {
      await navigator.share(shareData);
    } catch (err) {
      alert('Error: ' + err);
    }
  },
  /*
   Fetch or fail to set availabilities
   */
  runFreeBusy({ commit, state, getters }) {
    console.log(getters.attendeeEmails);
    const attendeeItems = getters.attendeeEmails.length
      ? getters.attendeeEmails.map((att) => {
          if (att) {
            return {
              id: att,
            };
          }
        })
      : [{}];
    console.log([
      {
        id: state.user.email,
      },
      ...attendeeItems,
    ]);
    const data = {
      timeMin: state.shift.dates.range.start || new Date(),
      timeMax: state.shift.dates.range.end || addDays(new Date(), 7),
      // "timeZone": string,
      // "groupExpansionMax": integer,
      // "calendarExpansionMax": integer,
      items: [
        {
          id: state.user.email,
        },
        ...attendeeItems,
      ],
    };
    // So we iterate through calendars and we check the errors values
    // If a global not found ask if user would like to allow access in a modal
    // Immediately after fetch if temporary allowed then turn off
    this.$axios
      .post('https://www.googleapis.com/calendar/v3/freeBusy', data, { params: { key: process.env.GOOGLE_API_KEY } })
      .then((resp) => {
        const { data } = resp;
        commit('setAvailabilities', data);
      })
      .catch((err) => {
        console.error(err);
        commit('addError', err);
      });
  },
  addAttendee({ state, getters, commit }, attendee) {
    if (attendee.email.trim() && !getters.attendeeEmails.includes(attendee.email)) {
      commit('addAttendee', attendee);
    }
  },
  removeAttendee: ({ getters, commit }, attendee) => {
    commit('spliceAttendee', getters.attendeeEmails.indexOf(attendee));
  },
  resetVuexState({ commit }) {
    commit('resetState');
  },
};
