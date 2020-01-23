<template>
  <div>
    <b-form @submit="onSubmit">
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
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  computed: {
    email: {
      get(): string {
        return this.$store.state.user.email || '';
      },
      set(value): void {
        return this.$store.commit('setUserEmail', value);
      },
    },
  },
})
export default class EmailInput extends Vue {
  onSubmit(evt: any): void {
    evt.preventDefault();
    this.$router.push('/shiftWelcome');
  }
}
</script>
