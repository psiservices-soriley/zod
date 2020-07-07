"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
const z = require("..");
test('', () => {
    expect(z).toBeDefined();
});
const fish = z.object({
    name: z.string(),
    props: z.object({
        color: z.string(),
        numScales: z.number(),
    }),
});
const nonStrict = z
    .object({
    name: z.string(),
    color: z.string(),
})
    .nonstrict();
test('object pick type', () => {
    const modNonStrictFish = nonStrict.omit({ name: true });
    modNonStrictFish.parse({ color: 'asdf' });
    const bad1 = () => fish.pick({ props: { unknown: true } });
    const bad2 = () => fish.omit({ name: true, props: { unknown: true } });
    expect(bad1).toThrow();
    expect(bad2).toThrow();
});
test('f1', () => {
    const f1 = fish.pick(true);
    f1.parse({ name: 'a', props: { color: 'b', numScales: 3 } });
});
test('f2', () => {
    const f2 = fish.pick({ props: true });
    f2.parse({ props: { color: 'asdf', numScales: 1 } });
    const badcheck2 = () => f2.parse({ name: 'a', props: { color: 'b', numScales: 3 } });
    expect(badcheck2).toThrow();
});
test('f3', () => {
    const f3 = fish.pick({ props: { color: true } });
    f3.parse({ props: { color: 'b' } });
    const badcheck3 = () => f3.parse({ name: 'a', props: { color: 'b', numScales: 3 } });
    expect(badcheck3).toThrow();
});
test('f4', () => {
    const badcheck4 = () => fish.pick({ props: { color: true, unknown: true } });
    expect(badcheck4).toThrow();
});
test('f6', () => {
    const f6 = fish.omit({ props: true });
    const badcheck6 = () => f6.parse({ name: 'a', props: { color: 'b', numScales: 3 } });
    f6.parse({ name: 'adsf' });
    expect(badcheck6).toThrow();
});
test('f7', () => {
    const f7 = fish.omit({ props: { color: true } });
    f7.parse({ name: 'a', props: { numScales: 3 } });
    const badcheck7 = () => f7.parse({ name: 'a', props: { color: 'b', numScales: 3 } });
    expect(badcheck7).toThrow();
});
test('f8', () => {
    const badcheck8 = () => fish.omit({ props: { color: true, unknown: true } });
    expect(badcheck8).toThrow();
});
test('f9', () => {
    const f9 = nonStrict.pick(true);
    f9.parse({ name: 'a', color: 'asdf' });
});
test('f10', () => {
    const f10 = nonStrict.pick({ name: true });
    f10.parse({ name: 'a' });
    const val = f10.parse({ name: 'a', color: 'b' });
    expect(val).toStrictEqual({ name: 'a' });
});
test('f12', () => {
    const badfcheck12 = () => nonStrict.omit({ color: true, asdf: true });
    expect(badfcheck12).toThrow();
});
test('invalid mask #1', () => {
    const fail = () => fish.pick(1);
    expect(fail).toThrow();
});
test('invalid mask #2', () => {
    const fail = () => fish.pick([]);
    expect(fail).toThrow();
});
test('invalid mask #3', () => {
    const fail = () => fish.pick(false);
    expect(fail).toThrow();
});
test('invalid mask #4', () => {
    const fail = () => fish.pick('asdf');
    expect(fail).toThrow();
});
test('invalid mask #5', () => {
    const fail = () => fish.omit(1);
    expect(fail).toThrow();
});
test('invalid mask #6', () => {
    const fail = () => fish.omit([]);
    expect(fail).toThrow();
});
test('invalid mask #7', () => {
    const fail = () => fish.omit(false);
    expect(fail).toThrow();
});
test('invalid mask #8', () => {
    const fail = () => fish.omit('asdf');
    expect(fail).toThrow();
});
//# sourceMappingURL=deepmasking.test.js.map