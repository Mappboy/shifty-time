<template>
  <div>
    <h1>Share shift with friend</h1>
    <b-button @click="navShare">Share</b-button>
  </div>
</template>

<script>
export default {
  name: 'ShareShift',
  methods: {
    navShare(evt) {
      this.$store.dispatch('shareLink');
    },
  },
};
</script>

<!--<style scoped></style>-->
