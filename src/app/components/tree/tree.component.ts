import {Component, Input, OnInit} from '@angular/core';
import {TreeItem} from "../../store/TreeItemStore";

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  @Input() tree: TreeItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  calc(currentWidth: string):string {
    return parseInt(currentWidth)-100+"px";
  }
}
