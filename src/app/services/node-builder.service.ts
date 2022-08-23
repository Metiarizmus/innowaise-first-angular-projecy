import {Injectable} from '@angular/core';
import {TreeItemInterface} from "../models/tree-item.interface";
import {Branch} from "../models/branch";
import {Node} from "../models/node"
import {Leaf} from "../models/leaf";

@Injectable({
  providedIn: 'root'
})
export class NodeBuilder {

  public convertItemToNode(tree: TreeItemInterface[]): Node[] {
    return tree.map(treeItem => {
      if (treeItem.children.length) {
        const children = this.convertItemToNode(treeItem.children);
        return new Branch(treeItem.id, treeItem.name, treeItem.isSelected!, children);
      }
      return new Leaf(treeItem.id, treeItem.name, treeItem.isSelected!, []);
    });
  }

}

