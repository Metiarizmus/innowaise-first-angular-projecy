import {Node} from "./node";

export class Leaf extends Node {

  override setSelectedState(isSelected:boolean) {
    this.isSelected = isSelected;
  }

  operation(isSelected: boolean): void {
    this.setSelectedState(isSelected);
    this.parent?.checkChildrenSelected();
  }


}
