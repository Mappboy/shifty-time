<template>
  <div class="container-fluid d-flex flex-column justify-content-center align-items-center text-center">
    <h1>
      Availabilities page
    </h1>
    <div class="flex-row align-items-between">
      <b-button class="m-2" @click="$refs.vuecal.switchView('day')" variant="success">Day</b-button>
      <b-button class="m-2" @click="$refs.vuecal.switchView('week')" variant="success">Week</b-button>
      <b-button class="m-2" @click="$refs.vuecal.switchView('month')" variant="success">Month</b-button>
      <br />
      <b-button class="m-2" @click="$refs.vuecal.previous()" variant="info">Previous</b-button>
      <b-button class="m-2" @click="$refs.vuecal.switchView('day', new Date())" variant="info">Today</b-button>
      <b-button class="m-2" @click="$refs.vuecal.next()" variant="info">Next</b-button>
    </div>

    <div class="h-75 w-75">
      <client-only>
        <vue-cal
          ref="vuecal"
          :time-from="9 * 60"
          :time-to="23 * 60"
          :disable-views="['years', 'year']"
          :selected-date="getStartDate"
          hide-view-selector
        ></vue-cal>
      </client-only>
    </div>
  </div>
</template>

<script>
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css';
import { mapGetters } from 'vuex';
export default {
  name: 'ShowAvailability',
  components: {
    VueCal,
  },
  computed: {
    ...mapGetters(['getStartDate']),
  },
};
</script>
