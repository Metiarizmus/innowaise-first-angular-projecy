import {Directive, ElementRef, HostBinding, Input} from '@angular/core';
import {Colors} from "../constants/colors";

@Directive({
   selector: '[search]',
   exportAs: 'search'
})
export class SearchDirective {

   @Input() set search(text: string) {
      if (text) {
         this.changeColor(text);
      } else {
         this.backgroundColor = Colors.WHITE;
         this.isDisabled = false;
      }
   }

   @HostBinding("style.backgroundColor") get color() {
      return this.backgroundColor;
   }

   isDisabled: boolean = false;
   backgroundColor: Colors = Colors.WHITE;

   constructor(private elRef: ElementRef) {
   }

   changeColor(searchText: string): void {
      const itemText = this.elRef.nativeElement.innerText;
      if (itemText.includes(searchText)) {
         this.isDisabled = false;
         this.backgroundColor = Colors.LAW_GREEN;
      } else {
         this.isDisabled = true;
         this.backgroundColor = Colors.GRAY;
      }
   }

}
