import {describe, expect, test} from "vitest";
import {mount} from "@vue/test-utils";
import ClickableCounterUsingClass from "../../src/components/ClickableCounterUsingClass.vue";

describe('Component: ClickableCounter',()=>{
    test('Initial value is zero',()=>{
        const wrapper = mount(ClickableCounterUsingClass);
        const counterValue = wrapper.get('[data-test="counter-value"]')
        expect(counterValue.text()).toEqual('0');
    });

    test('Can set custom initial value',()=>{
        const wrapper = mount(ClickableCounterUsingClass,{props:{initialValue: 10}});
        const counterValue = wrapper.get('[data-test="counter-value"]')
        expect(counterValue.text()).toEqual('10');
    });

    test('Clicking to Increment button increment counter',async ()=>{
        const wrapper = mount(ClickableCounterUsingClass,{props:{initialValue: 5}});
        const counterValue = wrapper.get('[data-test="counter-value"]')
        const increaseButton = wrapper.get('[data-test="increment-button"]');
        await increaseButton.trigger('click');
        expect(counterValue.text()).toEqual('6');
    })

    test('Clicking to Decrement button decrement counter',async ()=>{
        const wrapper = mount(ClickableCounterUsingClass,{props:{initialValue: 5}});
        const counterValue = wrapper.get('[data-test="counter-value"]')
        const increaseButton = wrapper.get('[data-test="decrement-button"]');
        await increaseButton.trigger('click');
        expect(counterValue.text()).toEqual('4');
    })

    test('Increment button is disabled if max value is reached',async ()=>{
        const wrapper = mount(ClickableCounterUsingClass,{props:{initialValue: 5, maxValue:6}});
        const increaseButton = wrapper.get('[data-test="increment-button"]');
        await increaseButton.trigger('click');
        expect(increaseButton.attributes('disabled')).toBe('');
    })


})