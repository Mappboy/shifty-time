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
import { Component, Vue } from 'nuxt-property-decorator';
import { getters } from '~/store';

@Component({})
export default class EmailInput extends Vue {
  mounted() {
    const email = this.$store.state.user?.email || '';
  }
}
</script>

<!--<style scoped></style>-->
