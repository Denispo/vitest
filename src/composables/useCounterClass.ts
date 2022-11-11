import {readonly, ref} from "vue";

export interface UseCounterOptions {
    initialValue?:number,
    maxValue?:number,
    minValue?:number,
}

class Counter {

    private count = ref(0);
    private options:UseCounterOptions

    constructor(options:UseCounterOptions) {
        this.options = options;

        //if (typeof this.options.initialValue !== 'undefined'){
        if (typeof this.options.initialValue === 'number') {
            this.count.value = this.options.initialValue;
        }
    }

    getCount() {
        return readonly(this.count);
    }

    canIncrement() {
        return typeof this.options.maxValue !== "number" || this.count.value < this.options.maxValue;
    }

    canDecrement() {
        return typeof this.options.minValue !== "number" || this.count.value > this.options.minValue;
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