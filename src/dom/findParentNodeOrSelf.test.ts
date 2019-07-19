import { findParentNodeOrSelf } from './findParentNodeOrSelf';

test('findParentNodeOrSelf', () => {
  const n1 = {} as Node;
  const n2 = { parentNode: n1 } as Node;
  const n3 = { parentNode: n2 } as Node;
  expect(findParentNodeOrSelf(n1, () => true)).toBe(n1);
  expect(findParentNodeOrSelf(n2, () => true)).toBe(n2);
  expect(findParentNodeOrSelf(n3, () => true)).toBe(n3);
  expect(findParentNodeOrSelf(n3, (x) => x === n3)).toBe(n3);
  expect(findParentNodeOrSelf(n3, (x) => x === n2)).toBe(n2);
  expect(findParentNodeOrSelf(n3, (x) => x === n1)).toBe(n1);
  expect(findParentNodeOrSelf(n3, () => false)).toBe(undefined);
});
