import {readonly, ref} from "vue";

export interface UseCounterOptions {
    initialValue?:number,
    maxValue?:number,
    minValue?:number,
}

export function useCounter(options:UseCounterOptions = {}){
    const count = ref<number>(options.initialValue ?? 0);

    const doIncrement = () => {
        count.value ++;
        if (typeof options.maxValue == "number" && count.value > options.maxValue){
            count.value = options.maxValue;
        }
    }

    const doDecrement = () => {
        count.value --;
        if (typeof options.minValue == "number" && count.value < options.minValue){
            count.value = options.minValue;
        }
    }

    let result = {
        count:readonly(count),
        doIncrement,
        doDecrement
    }
    return result;

}