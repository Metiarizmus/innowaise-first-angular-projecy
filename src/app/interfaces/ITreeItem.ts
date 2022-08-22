export interface ITreeItem {
  id: string;
  name:string;
  isSelected?:boolean;
  children: ITreeItem[];

}
