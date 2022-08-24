import {AfterViewChecked, Directive, ElementRef, EventEmitter, Input, Output} from '@angular/core';

@Directive({
  selector: '[disabled]'
})
export class ColorDirective implements AfterViewChecked {

  @Input() disabled!: string;
  disabledItemsId: string[] = []

  @Output() emitDisabledItems = new EventEmitter;

  constructor(private elRef: ElementRef) {
  }

  ngAfterViewChecked(): void {

    if (this.disabled) {
      const itemText = this.elRef.nativeElement.innerText;
      if (itemText.includes(this.disabled) && this.disabled != "") {
        this.elRef.nativeElement.style.backgroundColor = "lawngreen";
      } else {
        this.elRef.nativeElement.style.backgroundColor = "gray";
        this.getDisabledItems();
      }
    }
    if (this.disabled === "") {
      this.elRef.nativeElement.style.backgroundColor = "white";
      this.disabledItemsId = [];
      this.emitDisabledItems.emit(this.disabledItemsId)
    }
  }

  getDisabledItems() {
    this.disabledItemsId = (this.elRef.nativeElement.getAttribute('data-value'));
    this.emitDisabledItems.emit(this.disabledItemsId);
  }

}
