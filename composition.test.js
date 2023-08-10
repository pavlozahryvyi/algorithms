import { compose } from "./composition";

const fnA = (x) => x + 1;
const fnB = (x) => 2 * x;
const fnC = (x) => 3 * x;

test("[fnA,fnB,fnC]", () => {
  const composedFn = compose([fnA, fnB, fnC]);
  expect(composedFn(2)).toBe(13);
});

test("[fnB,fnA,fnC]", () => {
  const composedFn = compose([fnB, fnA, fnC]);
  expect(composedFn(2)).toBe(14);
});

test("[fnB,fnC,fnA]", () => {
  const composedFn = compose([fnB, fnC, fnA]);
  expect(composedFn(2)).toBe(18);
});
