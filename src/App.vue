<script setup lang="ts">

import ClickableCounter from "./components/ClickableCounter.vue";
import ClickableCounterUsingClass from "./components/ClickableCounterUsingClass.vue";
</script>

<template>
<!--

  <clickable-counter :min-value="-5" :max-value="5"></clickable-counter>

-->
  <div></div>

  <clickable-counter-using-class :max-value="5" :min-value="-5"></clickable-counter-using-class>

</template>

