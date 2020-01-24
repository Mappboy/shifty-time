<template>
  <div class="d-flex flex-column justify-content-center align-items-center text-center container">
    <div>
      <attendee-input />
    </div>
    <h2>OR</h2>
    <share-shift />
  </div>
</template>

<script>
import ShareShift from '~/components/ShareShift.vue';
import AttendeeInput from '~/components/AttendeeInput.vue';

export default {
  components: {
    ShareShift,
    AttendeeInput,
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
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
