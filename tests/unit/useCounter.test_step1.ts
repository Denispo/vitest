import {describe, expect, test} from "vitest";
import {useCounter} from "../../src/composables/useCounter";

describe('useCounter()',()=>{
    test('defaul initialValue is zero',()=>{
        const {count} = useCounter();
        expect(count.value).toEqual(0);
    });
})