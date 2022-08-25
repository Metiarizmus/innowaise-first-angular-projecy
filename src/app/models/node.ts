import {TreeItemInterface} from "./tree-item.interface";

export abstract class Node implements TreeItemInterface {

  id: string;
  isSelected: boolean = false;
  name: string;
  children: Node[] = [];

  parent!: Node | null;

  static listSelectedItems: string[] = [];

  constructor(id: string, name: string, isSelected: boolean,) {
    this.id = id;
    this.isSelected = isSelected;
    this.name = name;
  }

  public setParent(parent: Node | null) {
    this.parent = parent;
  }

  public setSelectedState(isSelected: boolean): void {
    this.isSelected = isSelected;
  }

  public checkChildrenSelected(): void {
  }

  public abstract operation(isSelected: boolean): void;

  addSelectedItemsToList(isSelected: boolean, id: string): void {
    if (isSelected) {
      Node.listSelectedItems = [...Node.listSelectedItems, id]
    } else {
      Node.listSelectedItems = Node.listSelectedItems.filter(x => x !== id);
    }
  }
}
