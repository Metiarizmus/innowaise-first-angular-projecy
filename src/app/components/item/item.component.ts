import {Component, Input, OnInit} from '@angular/core';
import {TreeItem} from "../../store/TreeItemStore";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() width!:string;
  @Input() item!: TreeItem;

  constructor() { }

  ngOnInit(): void {
  }

}
