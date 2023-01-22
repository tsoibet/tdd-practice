import caesarCipher from "./caesarCipher";

test('encrypt string with caesar cipher', () => {
    expect(caesarCipher('abcde')).toBe('bcdef');
});

test('z is wrapped to a', () => {
    expect(caesarCipher('xyz')).toBe('yza');
});

test('same case is kept', () => {
    expect(caesarCipher('Nora')).toBe('Opsb');
});

test('punctuations and spaces are kept', () => {
    expect(caesarCipher('nora, the sheltie.')).toBe('opsb, uif tifmujf.');
});

test('designated shift', () => {
    expect(caesarCipher('def', 2)).toBe('fgh');
});

test('shift more than 26', () => {
    expect(caesarCipher('def', 27)).toBe('efg');
    expect(caesarCipher('def', 53)).toBe('efg');   
});

test('a is wrapped to z on negative shift', () => {
    expect(caesarCipher('abc', -1)).toBe('zab');
});