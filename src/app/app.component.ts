import {Component} from '@angular/core';
import {TreeItem} from "./interfaces/TreeItem";
import {TREE_ITEMS} from "./consts/TREE_ITEMS";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: TreeItem[] = TREE_ITEMS;
}
