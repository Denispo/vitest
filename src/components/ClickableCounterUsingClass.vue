<script setup lang="ts">
import {useCounterClass} from "../composables/useCounterClass";

const props = withDefaults(defineProps<{initialValue?:number, maxValue?:number, minValue?:number}>(),{initialValue:0})

const counter = useCounterClass({initialValue:props.initialValue, maxValue:props.maxValue, minValue:props.minValue});

const comp = counter.canIncrement;

</script>

<template>

  <!--
    Funguje pouze {{counter.canIncrement}}
    Nefunguje :disabled="!counter.canIncrement"
    Takže Vue v {{}} správně counter.canIncrement vyhodnotí, ale v :disabled counter.canIncrement vyhodnotit neumí
  -->
  <div class="font-mono mt-2">:disabled="!counter.canIncrement"</div>
  <button :disabled="!counter.canIncrement" class="disabled:text-red-700" data-test="increment-button" @click="counter.doIncrement()">
    PLUS {{counter.canIncrement}}
  </button>

  <!--
    Funguje spravně
    Přitom comp = counter.canIncrement viz řádek 8.
  -->
  <div class="font-mono mt-2">:disabled="!comp"</div>
  <button :disabled="!comp" class="disabled:text-red-700" data-test="increment-button" @click="counter.doIncrement()">
    PLUS {{comp}}
  </button>

  <!--
    Funguje spravne, ale musí se psát .value
  -->
  <div class="font-mono mt-2">:disabled="!counter.canIncrement.value"</div>
  <button :disabled="!counter.canIncrement.value" class="disabled:text-red-700" data-test="increment-button" @click="counter.doIncrement()">
    PLUS {{counter.canIncrement.value}}
  </button>

  <div data-test="counter-value" class="mt-2 text-2xl">{{counter.getCount()}}</div>

  <!--
    Funguje spravne
  -->
  <div class="font-mono mt-2">:disabled="!counter.canDecrement()"</div>
  <button :disabled="!counter.canDecrement()" class="disabled:text-red-700" @click="counter.doDecrement()" data-test="decrement-button" >
    MINUS
  </button>
</template>


