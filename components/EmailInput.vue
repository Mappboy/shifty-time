<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group>
        <b-form-input
          v-model="email"
          type="email"
          class="border-0 text-center"
          placeholder="Enter your email to get started"
        ></b-form-input>
      </b-form-group>
      <b-button variant="dark">Let's go</b-button>
    </b-form>
  </div>
</template>

<script lang="ts">
import { Component, Model, Vue } from 'nuxt-property-decorator';
import { State, Action } from 'vuex-class';
import { Email } from '~/types/email';

@Component({})
export default class EmailInput extends Vue {
  @Model() email!: Email;
  @State attendees!: Email;
  @Action('setAttendees') setAttendees!: (email: Email[]) => void;

  onSubmit(evt: any): void {
    evt.preventDefault();
    this.setAttendees([{ email: this.email.email }]);
    this.$router.push('/shiftWelcome');
  }

  onReset(evt: any): void {
    evt.preventDefault();
    // Reset our form values
    this.email = { email: '' };
  }
}
</script>
