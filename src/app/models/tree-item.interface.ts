export interface TreeItemInterface {
  id: string;
  name:string;
  isSelected?:boolean;
  children: TreeItemInterface[];
}
