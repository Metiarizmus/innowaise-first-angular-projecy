import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {Node} from "../../models/node";
import {selectNodeItems} from "../../utils/select-node-items";

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
   @Input() inputValue!: string;

   onChange = (value: string[]) => {
   };
   onTouched = () => {
   };

   writeValue(defaultSelected: string[]) {
      selectNodeItems(this.tree, this.convertToObject(defaultSelected))
   }

   registerOnChange(fn: any): void {
      this.onChange = fn;
   }

   registerOnTouched(fn: any): void {
   }

   select(item: Node): void {
      item.operation(!item.isSelected)
      this.onChange(Node.listSelectedItems)
   }

   convertToObject(arr: string[]): any {
      return (arr.reduce((acc, val) => ({
         ...acc, [val]: 'true'
      }), {}));
   }
}
