import { evaluate } from "./module1";

describe("Simple expression tests", () => {
    test("Check literal value", () => {
        expect(evaluate(5)).toEqual(5);
    });
});