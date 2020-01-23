<template>
  <welcome-user />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import WelcomeUser from '~/components/WelcomeUser.vue';

@Component({
  components: { WelcomeUser },
})
export default class ShiftWelcome extends Vue {}
</script>
