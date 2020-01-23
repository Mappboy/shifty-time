import Vuex, { MutationTree, ActionTree, ActionContext, GetterTree } from 'vuex';
import { Context as AppContext } from '@nuxt/types';
import { Shift } from '~/types/shift';
import { Email } from '~/types/email';
import { RootState } from '~/types/state';

export const state = (): RootState => ({
  shift: { id: '' },
  attendees: [],
});

export const mutations: MutationTree<RootState> = {
  setAttendees(state: RootState, attendees: Email[]): void {
    state.attendees = attendees;
  },
  setShift(state: RootState, shift: Shift): void {
    state.shift = shift;
  },
};

export const getters: GetterTree<RootState, RootState> = {
  getFirstAttendee(state): Email {
    return state.attendees[0];
  },
  getShiftId(state): Shift {
    return state.shift;
  },
  setShift(state: RootState, shift: Shift): void {
    state.shift = shift;
  },
};

interface Actions<S, R> extends ActionTree<S, R> {
  nuxtServerInit(actionContext: ActionContext<S, R>, appContext: AppContext): void;
}

export const actions: Actions<RootState, RootState> = {
  async nuxtServerInit({ commit }, context) {
    const attendees: Email[] = [];

    // If you serve the site statically with `nuxt generate`, you can't use HTTP requests for local
    // people = context.isStatic ?
    //  localRandomData :
    //  await context.app.$axios.$get("./random-data.json")

    commit('setAttendees', ...attendees);
    const shift = await context.app.$axios.$get('/shift');
    commit('setShift', shift);
  },
};
