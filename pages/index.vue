<template>
  <div class="d-flex flex-column justify-content-center align-items-center text-center container">
    <div>
      <logo />
      <h1 class="d-block display-1 font-weight-bolder title">
        Shifty Time
      </h1>
      <h2 class="display-3 font-weight-lighter subtitle">
        Helping shifty people find time together
      </h2>
      <email-input />
    </div>
    <b-button v-on:click="reset" variant="danger">Reset</b-button>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue';
import EmailInput from '~/components/EmailInput.vue';

export default {
  components: {
    Logo,
    EmailInput,
  },
  methods: {
    reset(evt) {
      evt.preventDefault();
      this.$store.dispatch('resetVuexState');
    },
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
    Arial, sans-serif;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
