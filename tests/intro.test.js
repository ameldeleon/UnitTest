import { describe, test, it, expect } from "vitest";
import {calculateAverage, max} from "../src/intro";
import {factorial} from "../src/intro";
import {fizzBuzz} from "../src/intro";


describe ('max', () => {
    it('Should return the first argument if it is greater', () => {
        // AAA
        // // Arrange: Turn on the TV
        // const a = 2;
        // const b = 1;
        
        // // Act: Press the powert button
        // const result = max (2, 1);
        
        // // Assert: Verify TV is off
        // expect(result). toBe(2);
        expect(max(2, 1)).toBe(2);
    });

    it('Should return the second argument if it is greater', ()=>{
        expect(max(1,2)).toBe(2);
    });

    it('Should return the first argument if arguments are equal', ()=>{
        expect(max(1,1)).toBe(1);
    })
})

describe ('calculateAveragee', () => {
    it('should return NaN if given an empty array', () => {
        expect(calculateAverage([])).toBe(NaN);
    });

    it('should calculate the average of an array with a single element', () => {
        expect(calculateAverage([1])).toBe(1);
    });

    it('should calculate the average of an array with a two element', () => {
        expect(calculateAverage([1, 2])).toBe(1.5);
    });

    it('should calculate the average of an array with a two element', () => {
        expect(calculateAverage([1, 2, 3])).toBe(2);
    });
    
});

describe ('factorial', () => {
    it('should return 1 if given 0', () => {
        expect(factorial(0)).toBe(1);
    });

    it('should return 1 if given 1', () => {
        expect(factorial(1)).toBe(1);
    })    
});