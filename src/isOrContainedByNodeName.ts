export interface INode {
  nodeName?: string;
  parentNode?: INode;
}

export const isOrContainedByNodeName = (
  node: INode | null | undefined,
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
