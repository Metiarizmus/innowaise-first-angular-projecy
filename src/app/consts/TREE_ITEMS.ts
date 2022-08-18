import { TreeItem } from "../interfaces/TreeItem";

export const TREE_ITEMS: TreeItem[] = [
  {
    id: '1',
    name: 'Den',
    children: []
  },
  {
    id: '2',
    name: 'Den2',
    children: [
      {
        id: '4',
        name: 'Den2Child1',
        children: []
      },
      {
        id: '5',
        name: 'Den2Child2',
        children: []
      }
    ]
  },
  {
    id: '3',
    name: 'Den3',
    children: [
      {
        id: '6',
        name: 'Den3Child1',
        children: []
      },
      {
        id: '7',
        name: 'Den3Child2',
        children: [
          {
            id: '8',
            name: 'Den3Child2_1',
            children: []
          },
          {
            id: '9',
            name: 'Den3Child2_2',
            children: []
          }
        ]
      },
      {
        id: '10',
        name: 'Den3Child3',
        children: []
      }
    ]
  }
];
