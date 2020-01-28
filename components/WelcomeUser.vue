<template>
  <div class="d-flex flex-column justify-content-center align-items-center text-center container">
    <div>
      <p class="h1 font-weight-lighter subtitle">
        Hello
        <b-form-input
          v-model="name"
          class="border-0 text-center col-sm display-3 font-weight-lighter"
          size="lg"
          placeholder="Enter Your Name"
        ></b-form-input>
        please select dates for when it's good to hang out
      </p>
    </div>
    <div>
      <client-only>
        <v-date-picker
          :available-dates="{
            start: new Date(),
          }"
          :value="null"
          v-model="range"
          mode="range"
          color="red"
          is-dark
          is-expanded
          is-inline
        />
      </client-only>
    </div>
    <!--    We should add something below to show availabilities -->
    <div class="pt-3">
      <b-button @click="inviteUser" variant="dark link">Invite A Friend</b-button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    name: {
      get() {
        return this.$store.state.user.name || '';
      },
      set(value) {
        return this.$store.commit('setUserName', value);
      },
    },
    range: {
      get() {
        return this.$store.state.shift.dates.range;
      },
      set(value) {
        return this.$store.commit('setDateRange', value);
      },
    },
  },
  methods: {
    inviteUser() {
      this.$store.commit('setDateRange', this.range);
      this.$router.push('invite-user');
      console.log('incomplete');
    },
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
}

.subtitle {
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
