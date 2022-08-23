import {Component, forwardRef, Input} from '@angular/core';
import {ITreeItem} from "../../interfaces/ITreeItem";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {Branch} from "../../models/branch";
import {Leaf} from "../../models/leaf";
import {Node} from "../../models/node";

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TreeComponent),
    multi: true,
  }],
})
export class TreeComponent implements ControlValueAccessor {

  @Input() tree: Node[] = [];

  treeItemIds: string[] = [];

  onChange2!: Function;
  onTouch!: Function;

  writeValue(itemsIds: string[]) {
    this.treeItemIds = itemsIds;
  }

  registerOnChange(fn: Function): void {
    this.onChange2 = fn;
  }

  registerOnTouched(fn: Function): void {
    this.onTouch = fn;
  }

  select(item: Node): void {
    item.operation(!item.isSelected);
  }

}
