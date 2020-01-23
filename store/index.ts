import { Store } from 'vuex';
import { extractVuexModule, createProxy } from 'vuex-class-component';
import shiftModule from '~/store/shift';

export const store = new Store({
  modules: {
    ...extractVuexModule(shiftModule),
  },
});

// Creating proxies.
export const vxm = {
  shift: createProxy(store, shiftModule),
};
