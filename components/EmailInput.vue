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
      <b-button type="submit" variant="dark">Let's go</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  computed: {
    email: {
      get() {
        return this.$store.state.user.email || '';
      },
      set(value) {
        return this.$store.commit('setUserEmail', value);
      },
    },
  },
  mounted() {
    this.$store.dispatch('getShift').catch((err) => {
      console.warn(err);
    });
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.$router.push('/shift-welcome');
    },
  },
};
</script>
