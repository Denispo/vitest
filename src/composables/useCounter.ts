import {readonly, ref} from "vue";

export interface UseCounterOptions {
    initialValue?:number,
    maxValue?:number,
    minValue?:number,
}

export function useCounter(options:UseCounterOptions = {}){
    const count = ref<number>(options.initialValue ?? 0);
    const maxValue = options.maxValue;
    const minValue = options.minValue;
    const doIncrement = () => {
        count.value ++;
        if (typeof maxValue == "number" && count.value > maxValue){
            count.value = maxValue;
        }
    }

    const doDecrement = () => {
        count.value --;
        if (typeof minValue == "number" && count.value < minValue){
            count.value = minValue;
        }
    }

    let result = {
        count:readonly(count),
        doIncrement,
        doDecrement
    }
    return result;

}