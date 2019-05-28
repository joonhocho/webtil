export const isOrContainedByNodeName = (
  node: Node | null | undefined,
  nodeName: string
): boolean => {
  let currentNode = node;
  while (currentNode) {
    if (currentNode.nodeName === nodeName) {
      return true;
    }
    currentNode = currentNode.parentNode;
  }
  return false;
};
