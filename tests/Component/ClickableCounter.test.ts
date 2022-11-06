import {describe, expect, test} from "vitest";
import {mount} from "@vue/test-utils";
import ClickableCounter from "../../src/components/ClickableCounter.vue";

describe('Component: ClickableCounter',()=>{
    test('Initial value is zero',()=>{
        const wrapper = mount(ClickableCounter);
        const counterValue = wrapper.get('[data-test="counter-value"]')
        expect(counterValue.text()).toEqual('0');
    });

    test('Can set custom initial value',()=>{
        const wrapper = mount(ClickableCounter,{props:{initialValue: 10}});
        const counterValue = wrapper.get('[data-test="counter-value"]')
        expect(counterValue.text()).toEqual('10');
    });

})