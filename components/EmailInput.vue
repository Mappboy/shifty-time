<template>
  <div>
    <b-form @submit="onSubmit">
      <b-form-group>
        <b-form-input
          :value="email"
          type="email"
          class="border-0 text-center"
          placeholder="Enter your email to get started"
          @input="updateLocalUser($event)"
        ></b-form-input>
      </b-form-group>
      <b-button variant="dark">Let's go</b-button>
    </b-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue, namespace } from 'nuxt-property-decorator';
import { User } from '~/types/user';
const ShiftModule = namespace('shift');

@Component({})
export default class EmailInput extends Vue {
  @ShiftModule.State('user') user!: User;
  @ShiftModule.Getter('getUserEmail') getUserEmail!: string;
  @ShiftModule.Action('setUser') setUser!: (user: User) => void;

  get email(): string {
    return this.getUserEmail;
  }
  updateLocalUser(evt: any): void {
    this.setUser({ name: '', email: evt.target.value });
  }

  onSubmit(evt: any): void {
    evt.preventDefault();
    this.$router.push('/shiftWelcome');
  }
}
</script>
