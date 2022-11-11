import {computed, readonly, ref} from "vue";

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

        setTimeout(()=>{
           // this.count.value = this.options.minValue ?? 0;
        },5000);
    }

    getCount() {
        return readonly(this.count);
    }

    canIncrement = computed(()=>{
        console.log(this.count.value);
        return typeof this.options.maxValue !== "number" || this.count.value < this.options.maxValue;
    });
/*    canIncrement() {

    }*/

    canDecrement() {
        return typeof this.options.minValue !== "number" || this.count.value > this.options.minValue;
    }


    doIncrement() {
        if (this.canIncrement.value) {
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