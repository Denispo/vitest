import {computed, readonly, ref} from "vue";

export interface UseCounterOptions {
    initialValue?:number,
    maxValue?:number,
    minValue?:number,
}

class Counter {

    private count = ref(0);

    private canIncrement() {
        return typeof this.options.maxValue !== "number" || this.count.value < this.options.maxValue;
    }

    private canDecrement() {
        return typeof this.options.minValue !== "number" || this.count.value > this.options.minValue;
    }

    constructor(private options:UseCounterOptions) {
        if (typeof options.initialValue === 'number') {
            this.count.value = options.initialValue;
        }
    }

    getCount() {
        return readonly(this.count);
    }

    doIncrement() {
        if (this.canIncrement()) {
            this.count.value++;
        }
    }

    doDecrement() {
        if (this.canDecrement()) {
            this.count.value--;
        }
    }

}

export function useCounterClass(options:UseCounterOptions = {}) {
    return new Counter(options);
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