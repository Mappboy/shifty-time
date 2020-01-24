<template>
  <div class="d-flex flex-column justify-content-center align-items-center text-center container">
    <div>
      <p class="subtitle">
        Hello
        <b-form-input v-model="name" class="subtitle border-0 text-center" placeholder="Enter Your Name"></b-form-input>
        please select dates for when it's good to hang out
      </p>
    </div>
    <!--    Add a quick picker here -->
    <div>
      <no-ssr>
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
      </no-ssr>
    </div>
    <div class="pt-3">
      <b-button variant="dark link" to="inviteUser">Invite</b-button>
    </div>
  </div>
</template>

<script>
import { addDays } from 'date-fns';
export default {
  data() {
    return {
      range: {
        start: new Date(),
        end: addDays(new Date(), 7),
      },
    };
  },
  computed: {
    name: {
      get() {
        return this.$store.state.user.name || '';
      },
      set(value) {
        return this.$store.commit('setUserName', value);
      },
    },
  },
  methods: {
    validateData() {
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

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
    Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
