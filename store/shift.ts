import { createModule, mutation, action } from 'vuex-class-component';

import { Shift } from '~/types/shift';
import { Email } from '~/types/email';
import { RootState } from '~/types/state';
import { $axios } from '~/utils/api';
import { User } from '~/types/user';

const VuexModule = createModule({
  namespaced: 'shift',
  strict: false,
  target: 'nuxt',
});

export default class extends VuexModule implements RootState {
  shift: Shift = { id: '' };
  user: User = { name: '', email: '' };
  attendees: Email[] = [];

  @mutation
  setAttendees(attendees: Email[]): void {
    this.attendees = attendees;
  }

  @mutation
  setShift(shift: Shift): void {
    this.shift = shift;
  }

  @mutation
  setUser(user: User): void {
    this.user = user;
  }

  get getUserEmail(): string {
    if (this.user) {
      return this.user.email;
    }
    return '';
  }

  get getUser(): User {
    return this.user;
  }

  get getShiftId(): Shift | null {
    return this.shift;
  }

  @action
  async nuxtServerInit() {
    const shift = await $axios.$get('/shift');
    this.setShift(shift);
  }
}
