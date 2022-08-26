import {Node} from "./node";

export class Branch extends Node {

   list: Node[] = [];

   constructor(id: string, name: string, isSelected: boolean, children: Node[]) {
      super(id, name, isSelected);
      children.forEach(child => {
         this.add(child);
      })
   }

   public add(node: Node): void {
      node.setParent(this);
      this.children = [...this.children, node];
   }

   override checkChildrenSelected(): void {
      const isSelected = this.children.every((child: Node) => child.isSelected);
      if (this.isSelected === isSelected) {
         return;
      }
      this.isSelected = isSelected;
      this.addSelectedItemsToList(isSelected, this.id)
      if (this.parent) {
         this.parent.checkChildrenSelected();
      }
   }

   override setSelectedState(isSelected: boolean, defaultListSelected?: string[]) {
      this.isSelected = isSelected;
      this.addSelectedItemsToList(isSelected, this.id);
      this.children.forEach(child => {
         console.log(child.id)
         if (defaultListSelected?.includes(child.id)) {
            isSelected = true;
         }
         child.setSelectedState(isSelected);
      });
   }

   operation(isSelected: boolean, defaultListSelected?: string[]): void {
      if (defaultListSelected?.includes(this.id)) {
         isSelected = true;
      }
      this.setSelectedState(isSelected, defaultListSelected);
      if (this.parent) {
         this.parent.checkChildrenSelected();
      }
   }
}
