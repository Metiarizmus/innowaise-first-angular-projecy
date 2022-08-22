import {Node} from "./node";

export class Branch extends Node {

  list: Node[] = [];

  public add(node: Node): void {
    node.setParent(this);
    this.children = [...this.children, node];
  }

  // public remove

  override checkChildrenSelected(): void {
    const isSelected = this.children.every((child) => child.isSelected);
    if(this.isSelected === isSelected){
      return;
    }
    this.isSelected = isSelected;
    if(this.parent){
      this.parent.checkChildrenSelected()
    }
  }

  override setSelectedState(isSelected: boolean) {
    this.isSelected = isSelected;
    this.children.forEach((child) => child.setSelectedState(isSelected))
  }

  operation(isSelected: boolean): void {
    this.setSelectedState(isSelected);
    if(this.parent){
      this.parent.checkChildrenSelected()
    }
  }


}
