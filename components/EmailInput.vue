<template>
  <div>
    <b-form @submit="onSubmit">
      <b-form-group>
        <b-form-input
          v-model="user.email"
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

import { vxm } from '~/store';

@Component({ data: { user: vxm.shift.user } })
export default class EmailInput extends Vue {
  onSubmit(evt: any): void {
    evt.preventDefault();
    this.$router.push('/shiftWelcome');
  }
}
</script>
