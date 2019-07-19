export const containsNode = (parent: Node, child: Node | null): boolean => {
  let p: Node | null = child;
  while (p) {
    if (p === parent) {
      return true;
    }
    p = p.parentNode;
  }
  return false;
};
