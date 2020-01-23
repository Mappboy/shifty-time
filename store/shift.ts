import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';

import { Shift } from '~/types/shift';
import { Email } from '~/types/email';
import { RootState } from '~/types/state';
import { $axios } from '~/utils/api';
import { User } from '~/types/user';

@Module({
  name: 'shift',
  stateFactory: true,
  namespaced: true,
})
export default class extends VuexModule implements RootState {
  shift: Shift = { id: '' };
  user: User = { name: '', email: '' };
  attendees: Email[] = [];

  @Mutation
  setAttendees(attendees: Email[]): void {
    this.attendees = attendees;
  }

  @Mutation
  setShift(shift: Shift): void {
    this.shift = shift;
  }

  @Mutation
  setUser(user: User): void {
    this.user = user;
  }

  get getUserEmail(): string {
    return this.user.email;
  }

  get getShiftId(): Shift {
    return this.shift;
  }

  @Action
  async nuxtServerInit() {
    const shift = await $axios.$get('/shift');
    this.setShift(shift);
  }
}
