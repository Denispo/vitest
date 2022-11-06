import {describe, expect, test} from "vitest";
import {useCounterClass} from "../../src/composables/useCounterClass";


describe('useCounterClass()',()=>{
    test('defaul initialValue is zero',()=>{
        const counter = useCounterClass();
        expect(counter.getCount().value).toEqual(0);
    });
    test('can increment',()=>{
        const counter = useCounterClass({initialValue:5});
        counter.doIncrement();
        expect(counter.getCount().value).toEqual(6);
    })
    test('can not increment over max value',()=>{
        const counter = useCounterClass({initialValue:5, maxValue:5});
        counter.doIncrement();
        expect(counter.getCount().value).toEqual(5);
    })
    test('can decrement',()=>{
        const counter = useCounterClass({initialValue:5});
        counter.doDecrement();
        expect(counter.getCount().value).toEqual(4)
    })
    test('can not decrement below min value',()=>{
        const counter = useCounterClass({initialValue:8, minValue:8});
        counter.doDecrement();
        expect(counter.getCount().value).toEqual(8);
    })
})