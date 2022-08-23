import {ITreeItem} from "../interfaces/ITreeItem";

export abstract class Node implements ITreeItem {

  id: string;
  isSelected: boolean = false;
  name: string;
  children: Node[] = [];

  parent!: Node | null;

  constructor(id: string, name: string, isSelected: boolean, children: Node[]) {
    this.id = id;
    this.isSelected = isSelected;
    this.name = name;
    this.children = children;
  }

  public setParent(parent: Node | null) {
    this.parent = parent;
  }

  public setSelectedState(isSelected: boolean): void {
    this.isSelected = isSelected;
  }

  public checkChildrenSelected(): void {}

  public abstract operation(isSelected: boolean): void;
}
