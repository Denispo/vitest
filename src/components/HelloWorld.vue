<script setup lang="ts">

import ClickableCounter from "./ClickableCounter.vue";
import ClickableCounterUsingClass from "./ClickableCounterUsingClass.vue";
import {ref} from "vue";

const maxValue = ref(6);

setTimeout(()=>{
  maxValue.value = 5
},2000)

</script>

<template>

  <clickable-counter :initial-value="5" :max-value="maxValue"></clickable-counter>
  <div></div>
  <clickable-counter-using-class :initial-value="5" :max-value="maxValue"></clickable-counter-using-class>

</template>
