import {describe, expect, test} from "vitest";
import {useCounter} from "../../src/composables/useCounter";

describe('useCounter()',()=>{
    test('defaul initialValue is zero',()=>{
        const {count} = useCounter();
        expect(count.value).toEqual(0);
    });
    test('can increment',()=>{
        const {doIncrement, count} = useCounter({initialValue:5});
        doIncrement();
        expect(count.value).toEqual(6);
    })
    test('can not increment over max value',()=>{
        const {doIncrement, count} = useCounter({initialValue:5, maxValue:5});
        doIncrement();
        expect(count.value).toEqual(5);
    })
    test('can decrement',()=>{
        const {doDecrement, count} = useCounter({initialValue:5});
        doDecrement();
        expect(count.value).toEqual(4)
    })
    test('can not decrement below min value',()=>{
        const {doDecrement, count} = useCounter({initialValue:5, minValue:5});
        doDecrement();
        expect(count.value).toEqual(5);
    })
})