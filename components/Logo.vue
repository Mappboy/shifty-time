<template>
  <b-img class="ShiftyLogo" width="245" height="180" view-box="0 0 452 342" fluid src="~/assets/shifty.svg" />
</template>
<style>
.ShiftyLogo {
  animation: 1s appear;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
