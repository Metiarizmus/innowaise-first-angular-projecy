import {Component, OnInit} from '@angular/core';
import {TreeItem, TreeItems} from "./store/TreeItemStore";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  items: TreeItem[] = TreeItems;

  ngOnInit(): void {

  }


}
