<template>
  <div>
    <b-form>
      <b-form-group>
        <b-form-input
          v-model="attendee"
          type="email"
          class="border-0 text-center subtitle"
          placeholder="Enter a friends email"
        ></b-form-input>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'AttendeeInput',
  data() {
    return {
      attendee: '',
    };
  },
};
</script>
