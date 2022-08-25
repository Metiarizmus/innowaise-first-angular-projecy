import {Node} from "./node";

export class Leaf extends Node {

  override setSelectedState(isSelected: boolean) {
    this.isSelected = isSelected;
    this.addSelectedItemsToList(isSelected, this.id)
  }

  operation(isSelected: boolean): void {
    this.setSelectedState(isSelected);

    if (this.parent) {
      this.parent.checkChildrenSelected();
    }
  }
}
