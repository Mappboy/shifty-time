import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import shift from '~/store/shift';

// eslint-disable-next-line import/no-mutable-exports
let shiftStore: shift;

function initialiseStores(store: Store<any>): void {
  shiftStore = getModule(shift, store);
}

export { initialiseStores, shiftStore };
