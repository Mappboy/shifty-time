import { GetterTree, ActionTree, MutationTree } from 'vuex';

import { Shift } from '~/types/shift';
import { Email } from '~/types/email';
import { $axios } from '~/utils/api';
import { User } from '~/types/user';
import { RootState } from '~/types/state';

export const state = () => ({
  shift: { id: '' },
  user: { name: '', email: '' },
  attendees: [] as Email[],
});

export const getters: GetterTree<RootState, RootState> = {
  user: (state) => (state.user ? state.user : { name: '', email: '' }),
  shift: (state) => state.shift,
  attendees: (state) => state.attendees,
};

export const mutations: MutationTree<RootState> = {
  setAttendees: (state, attendees: Email[]) => (state.attendees = attendees),
  setShift: (state, shift: Shift) => (state.shift = shift),
  setUser: (state, user: User) => (state.user = user),
  setUserEmail: (state, email: Email) => (state.user.email = email.email),
};

// export const actions: ActionTree<RootState, RootState> = {
//   async nuxtServerInit({ commit }) {
//     const shift = await $axios.$get('/shift');
//     commit('setShift', shift);
//   },
// };
