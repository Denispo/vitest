import {ref} from "vue";

export interface UseCounterOptions {
    initialValue?:number,
    maxValue?:number,
    minValue?:number,
}

export function useCounter(options:UseCounterOptions = {}){
    const count = ref<number>(options.initialValue ?? 0);
    const doIncrement = () => {
        count.value++;
    }
    const doDecrement = () => {
        count.value--;
    }

    if (typeof options.maxValue !== "undefined" && count.value > options.maxValue){
        count.value = options.maxValue;
    }
    if (typeof options.minValue !== "undefined" && count.value < options.minValue){
        count.value = options.minValue;
    }

    let result = {
        count,
        doIncrement,
        doDecrement
    }
    return result;

}