import { isOrContainedByNodeName } from './isOrContainedByNodeName';

export const isAnchorEvent = ({ target }: Event): boolean =>
  target != null &&
  (target as Node).nodeName != null &&
  isOrContainedByNodeName(target as Node, 'A');
