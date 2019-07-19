export const findParentNodeOrSelf = <T extends Node = Node>(
  e: Node,
  match: (e: Node) => boolean
): T | undefined => {
  let p: Node | null = e;
  while (p) {
    if (match(p)) {
      return p as T;
    }
    p = p.parentNode;
  }
  return undefined;
};
