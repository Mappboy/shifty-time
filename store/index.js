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
  setAttendees: (state, attendees) => (state.attendees = attendees),
  setShift: (state, shift) => (state.shift = shift),
  setUser: (state, user) => (state.user = user),
  setUserEmail: (state, email) => (state.user.email = email),
  setUserName: (state, name) => (state.user.name = name),
};

export const actions = {
  async getShift({ commit }) {
    const { data } = await this.$axios.get('/shifts');
    commit('setShift', data);
  },
};
