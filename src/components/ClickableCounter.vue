<script setup lang="ts">
import {useCounter} from "../composables/useCounter";

const props = withDefaults(defineProps<{initialValue:number}>(),{initialValue:0})
const counter = useCounter({initialValue:props.initialValue});

</script>

<template>
  <div data-test="counter-value">{{counter.count}}</div>

</template>


