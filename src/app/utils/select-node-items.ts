import {Node} from "../models/node";

export const selectNodeItems = (treeItems: Node[] , selectedIdsMap: {[key:string]: true}): void => {
   treeItems.forEach(item => {
      item.isSelected = selectedIdsMap[item.id]
      if (item.children.length) {
         selectNodeItems(item.children, selectedIdsMap)
      }
   })
}