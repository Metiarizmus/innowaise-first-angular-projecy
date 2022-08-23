import {Injectable} from '@angular/core';
import {ITreeItem} from "../interfaces/ITreeItem";
import {Branch} from "../models/branch";
import {Leaf} from "../models/leaf";

@Injectable({
  providedIn: 'root'
})
export class ItemConverterService {

  public convertToClass(tree: ITreeItem[]): (Branch | Leaf)[] {

    return tree.map(treeItem => {
      if (treeItem.children.length) {
        const branch = new Branch(treeItem.id, treeItem.name, treeItem.isSelected!,[]);

        const children = this.convertToClass(treeItem.children);
        children.forEach((child) => {
          branch.add(child);
        })
        return branch;
      }
      return new Leaf(treeItem.id, treeItem.name, treeItem.isSelected!, []);
    });
  }

}

