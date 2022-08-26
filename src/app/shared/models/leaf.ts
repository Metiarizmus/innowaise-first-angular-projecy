import {Node} from "./node";

export class Leaf extends Node {

   override setSelectedState(isSelected: boolean) {
      this.isSelected = isSelected;
      this.addSelectedItemsToList(isSelected, this.id)
   }

   operation(isSelected: boolean, defaultListSelected?: string[]): void {
      if (defaultListSelected?.includes(this.id)) {
         isSelected = true;
      }
      this.setSelectedState(isSelected);
      if (this.parent) {
         this.parent.checkChildrenSelected();
      }
   }
}
