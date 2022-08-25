import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
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

  onChange2!: Function;
  onTouch!: Function;

  writeValue() {
  }

  registerOnChange(fn: Function): void {
    this.onChange2 = fn;
  }

  registerOnTouched(fn: Function): void {
    this.onTouch = fn;
  }

  select(item: Node): void {
    item.operation(!item.isSelected)
    this.onChange2(Node.listSelectedItems)
  }
}
