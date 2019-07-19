import { findParentOrSelf } from './findParentOrSelf';

test('findParentOrSelf', () => {
  const n1 = {} as Node;
  const n2 = { parentNode: n1 } as Node;
  const n3 = { parentNode: n2 } as Node;
  expect(findParentOrSelf(n1, () => true)).toBe(n1);
  expect(findParentOrSelf(n2, () => true)).toBe(n2);
  expect(findParentOrSelf(n3, () => true)).toBe(n3);
  expect(findParentOrSelf(n3, (x) => x === n3)).toBe(n3);
  expect(findParentOrSelf(n3, (x) => x === n2)).toBe(n2);
  expect(findParentOrSelf(n3, (x) => x === n1)).toBe(n1);
  expect(findParentOrSelf(n3, () => false)).toBe(undefined);
});
