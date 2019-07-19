import { containsNode } from './containsNode';

test('containsNode', () => {
  const n1 = {} as Node;
  const n2 = {} as Node;
  const n3 = {} as Node;
  expect(containsNode(n1, null)).toBe(false);
  expect(containsNode(n1, n1)).toBe(true);
  expect(containsNode(n1, n2)).toBe(false);
  (n2 as any).parentNode = n1;
  expect(containsNode(n1, n2)).toBe(true);
  expect(containsNode(n1, n3)).toBe(false);
  (n3 as any).parentNode = n2;
  expect(containsNode(n1, n3)).toBe(true);
  expect(containsNode(n3, n3)).toBe(true);
  expect(containsNode(n3, n2)).toBe(false);
  expect(containsNode(n3, n1)).toBe(false);
  expect(containsNode(n2, n3)).toBe(true);
});
