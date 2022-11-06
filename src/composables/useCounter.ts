import {computed, readonly, ref} from "vue";

export interface UseCounterOptions {
    initialValue?:number,
    maxValue?:number,
    minValue?:number,
}

export function useCounter(options:UseCounterOptions = {}){
    const count = ref<number>(options.initialValue ?? 0);

    const canIncrement = computed(() => {
        return typeof options.maxValue !== "number" || count.value < options.maxValue;
    })

    const canDecrement = computed(() => {
        return typeof options.minValue !== "number" || count.value > options.minValue;
    })


    const doIncrement = () => {
        if (canIncrement.value){
            count.value ++;
        }
    }

    const doDecrement = () => {
        if (canDecrement.value) {
            count.value --;
        }
    }

    let result = {
        count:readonly(count),
        doIncrement,
        doDecrement
    }
    return result;

}