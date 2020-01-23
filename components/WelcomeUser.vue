<template>
  <div class="container">
    <div v-if="email">
      <p>Hello {{ email }}</p>
    </div>
    <div v-else>
      Oops an error occured
    </div>
  </div>
</template>

<script lang="ts">
import { Getter } from 'vuex-class';
import { Component, Vue } from 'nuxt-property-decorator';
import { Email } from '~/types/email';

@Component({})
export default class EmailInput extends Vue {
  @Getter('getFirstAttendee') getFirstAttendee!: () => Email;

  get email(): string {
    const attendeeOne: Email = this.getFirstAttendee();
    return attendeeOne.email;
  }
}
</script>

<!--<style scoped></style>-->
