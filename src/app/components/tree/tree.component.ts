import {Component, Input} from '@angular/core';
import {TreeItem} from "../../interfaces/TreeItem";

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
})
export class TreeComponent{

  @Input() tree: TreeItem[] = [];

}
