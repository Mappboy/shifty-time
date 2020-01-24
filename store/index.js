export const state = () => ({
  shift: { id: '' },
  user: { name: '', email: '' },
  attendees: [],
});

export const getters = {
  user: (state) => (state.user ? state.user : { name: '', email: '' }),
  shift: (state) => state.shift,
  attendees: (state) => state.attendees,
};

export const mutations = {
  addAttendee: (state, attendee) => state.attendees.push(attendee),
  setAttendees: (state, attendees) => (state.attendees = [...state.attendees, ...attendees]),
  setShift: (state, shift) => (state.shift = shift),
  setUser: (state, user) => (state.user = user),
  setUserEmail: (state, email) => (state.user.email = email),
  setUserName: (state, name) => (state.user.name = name),
};

export const actions = {
  async getShift({ commit }) {
    const { data } = await this.$axios.get('https://localhost:3000/shifts');
    commit('setShift', data);
  },
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
};
