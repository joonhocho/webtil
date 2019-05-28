import { INode, isOrContainedByNodeName } from './isOrContainedByNodeName';

export interface IEvent {
  target?: INode | null;
}

export const isAnchorEvent = ({ target }: IEvent): boolean =>
  target != null &&
  target.nodeName != null &&
  isOrContainedByNodeName(target, 'A');
