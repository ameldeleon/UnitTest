import { describe, test, it, expect } from "vitest";
import {max} from "../src/intro";

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
});