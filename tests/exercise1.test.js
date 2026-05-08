import { describe, test, it, expect } from "vitest";
import {fizzBuzz, max} from "../src/intro";

describe ('max', () => {
    it('Return FizzBuzz if is divisble by 3 AND 5', () => {
        const input = 15
        const result = "FizzBuzz"
        expect(fizzBuzz(input)).toBe(result);
    });

    it('Return Fizz if is divisble by 3', () => {
        expect(fizzBuzz(3)).toBe('Fizz');
    });

    it('Return Buzz if is divisble by 5', () => {
        expect(fizzBuzz(10)).toBe('Buzz');
    });

    it('Return 34 if its non divisible by 3 or 5', () => {
        expect(fizzBuzz(34)).toBe('34');
    })
});