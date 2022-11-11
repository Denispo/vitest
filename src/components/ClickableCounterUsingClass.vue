<script setup lang="ts">
import {useCounterClass} from "../composables/useCounterClass";

const props = withDefaults(defineProps<{initialValue?:number, maxValue?:number, minValue?:number}>(),{initialValue:0})

const counter = useCounterClass({initialValue:props.initialValue, maxValue:props.maxValue});

</script>

<template>
  <button :disabled="!counter.canIncrement()" data-test="increment-button" @click="counter.doIncrement()">PLUS</button>
  <div data-test="counter-value">{{counter.getCount()}}</div>
  <button :disabled="!counter.canDecrement()" data-test="decrement-button" @click="counter.doDecrement()">MINUS</button>
</template>


