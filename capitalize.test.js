import capitalize from "./capitalize";

test('capitalize the first character of a string', () => {
    expect(capitalize("nora")).toBe("Nora");
    expect(capitalize("Nora")).toBe("Nora");
    expect(capitalize("NORA")).toBe("NORA");
});

test('string with space', () => {
    expect(capitalize("nora the sheltie")).toBe("Nora the sheltie");
});

test('string with number or symbol', () => {
    expect(capitalize("nora0706")).toBe("Nora0706");
    expect(capitalize("nora,the-sheltie")).toBe("Nora,the-sheltie");
});

test('string starting with nonletter', () => {
    expect(capitalize("1nora")).toBe("1nora");
    expect(capitalize(" nora ")).toBe(" nora ");
    expect(capitalize("*nora*")).toBe("*nora*");
});

test('empty string', () => {
    expect(capitalize("")).toBe("");
});