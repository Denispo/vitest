<script setup lang="ts">
import {useCounterClass} from "../composables/useCounterClass";

const counter = useCounterClass();

</script>

<template>
  <div data-test="counter-value">{{counter.getCount()}}</div>
</template>


