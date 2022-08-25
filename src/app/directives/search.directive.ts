import {Directive, ElementRef, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[search]',
  exportAs: 'search'
})
export class SearchDirective {

  @Input() set search(searchText: string) {
    this.searchText = searchText;
  }

  @Input("itemId") id: string = "";

  searchText!: string;
  listDisabledItems: string[] = [];

  constructor(private elRef: ElementRef) {
  }

  checkSelected(): boolean {
    return !!(this.listDisabledItems.includes(this.id) && this.listDisabledItems.length);
  }

  @HostBinding("style.backgroundColor") get backgroundColor() {
    if (this.searchText) {
      const itemText = this.elRef.nativeElement.innerText;
      if (itemText.includes(this.searchText) && this.searchText != "") {
        this.listDisabledItems.pop()
        return "lawngreen";
      } else {
        this.listDisabledItems = [this.listDisabledItems, this.elRef.nativeElement.getAttribute('data-value')];
        return "gray";
      }
    }
    if (this.searchText === "") {
      this.listDisabledItems = [];
      return "white";
    }
    return "white";
  }

}
