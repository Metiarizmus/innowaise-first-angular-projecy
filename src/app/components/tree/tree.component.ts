import {Component, Input, OnInit} from '@angular/core';
import {TreeItem} from "../../store/TreeItemStore";

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent {

  @Input() tree: TreeItem[] = [];

  calc(currentWidth: string):string {
    return parseInt(currentWidth)-100+"px";
  }

}
