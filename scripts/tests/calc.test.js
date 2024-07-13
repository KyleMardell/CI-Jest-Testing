/**
 * @jest-environment jsdom
 */

const { addition, subtraction } = require("../calc");

describe("Calculator", () => {
    describe("Addition function", () => {
        test("should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        });
        test("should return 73 for 42 + 31", () => {
            expect(addition(42, 31)).toBe(73);
        });
    });
    describe("Subtraction function", () => {
            test("should return 6 for 29 - 23", () => {
                expect(subtraction(29, 23)).toBe(6);
            });
            test("should return 42 for 100 - 58", () => {
                expect(subtraction(100, 58)).toBe(42);
            });
    });
    describe("Multiplication function", () => {

    });
    describe("Division function", () => {

    });
})