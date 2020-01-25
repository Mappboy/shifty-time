<template>
  <div class="d-flex flex-column justify-content-center align-items-center text-center container">
    <div v-if="attendees.length">
      <h1 class="border-0 text-center font-weight-bolder display-0">Attendees</h1>
      <h2
        v-for="att in attendees"
        @dblclick="editing = true"
        class="text-center font-weight-lighter display-0 subtitle"
      >
        {{ att.email }}
        <b-button v-on:click="removeAttendee(att)" pill class="border-0" variant="outline-dark">
          <b-icon icon="x" />
        </b-button>
      </h2>
    </div>
    <div>
      <b-form>
        <b-form-group>
          <b-form-input
            v-model="currentAttendee"
            type="email"
            class="border-0 text-center display-1"
            placeholder="Enter a friends email"
          ></b-form-input>
        </b-form-group>
      </b-form>
    </div>
    <div>
      <b-button v-on:click="newAttendee" pill class="border-0" variant="outline-dark">
        <p class="h1 mb-2">
          <b-icon icon="plus" font-scale="0"></b-icon>
        </p>
      </b-button>
    </div>
    <div v-if="$device.isMobileOrTablet">
      <h2>OR</h2>
      <share-shift />
    </div>
    <div v-else class="mb-4">
      <b-link
        id="share-link-btn"
        v-b-tooltip.hover
        v-clipboard="shareLink"
        title="'If you don't know your friend's email'"
        >Copy Invite to Clipboard</b-link
      >
      <!--      We should used this here https://bootstrap-vue.js.org/docs/components/popover/-->
      <b-popover target="share-link-btn" variant="dark" triggers="click" placement="top">
        Copied Link
      </b-popover>
    </div>
    <div>
      <b-button @click="saveAttendee">Get Availability</b-button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { mapActions, mapState } from 'vuex';
import ShareShift from '~/components/ShareShift.vue';

export default {
  components: {
    ShareShift,
  },
  data() {
    return {
      editing: false,
      attendee: '',
      shareLink: `${process.env.baseUrl}/shifts/${this.$store.state.shift.id}`,
    };
  },
  computed: {
    currentAttendee: {
      get() {
        return this.attendee;
      },
      set(value) {
        this.attendee = value;
      },
    },
    // mix the getters into computed with object spread operator
    ...mapState(['attendees']),
  },
  methods: {
    ...mapActions(['addAttendee', 'removeAttendee']),
    newAttendee(evt) {
      evt.preventDefault();
      this.$store.commit('addAttendee', { name: '', googleCalAvailable: false, email: this.currentAttendee });
      Vue.set(this, 'currentAttendee', '');
    },
    saveAttendee(evt) {
      evt.preventDefault();
      this.$store.dispatch('addAttendee', { name: '', googleCalAvailable: false, email: this.currentAttendee });
      this.$store.dispatch('runFreeBusy');
      this.$router.push('ShowAvailability');
    },
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
}

.subtitle {
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
