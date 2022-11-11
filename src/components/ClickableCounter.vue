<script setup lang="ts">
import {useCounter} from "../composables/useCounter";

const props = withDefaults(defineProps<{initialValue?:number, maxValue?:number, minValue?:number}>(),{initialValue:0})
const {
  count,
  doIncrement,
  doDecrement,
  canIncrement,
  canDecrement
} = useCounter({ initialValue:props.initialValue, maxValue:props.maxValue, minValue:props.minValue});

const counter = useCounter({initialValue:props.initialValue,maxValue:props.maxValue,minValue:props.minValue});

</script>

<template>
  <button :disabled="!canIncrement" data-test="increment-button" @click="doIncrement()">PLUS</button>
  <div data-test="counter-value">{{count}}</div>
  <button :disabled="!canDecrement" data-test="decrement-button" @click="doDecrement()">MINUS</button>

<div class="mt-4"></div>

  <button :disabled="!counter.canIncrement" data-test="increment-button" @click="counter.doIncrement()">PLUS</button>
  <div data-test="counter-value">{{counter.count}}</div>
  <button :disabled="!counter.canDecrement.value" data-test="decrement-button" @click="counter.doDecrement()">MINUS</button>

</template>


