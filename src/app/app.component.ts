import {AfterContentChecked, Component, OnDestroy, OnInit} from '@angular/core';
import {TreeItems} from "./constants/tree-items";
import {FormBuilder, FormGroup} from "@angular/forms";
import {NodeBuilder} from "./services/node-builder.service";
import {Node} from "./models/node";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy, AfterContentChecked {
  items!: Node[];
  myform!: FormGroup;

  inputValue!: string;

  subscr = new Subscription();

  constructor(private fb: FormBuilder,
              private cs: NodeBuilder) {
  }

  ngOnInit(): void {
    this.items = this.cs.convertItemToNode(TreeItems);

    this.myform = this.fb.group({
      mychecbox: '',
      searchInput: ''
    })

    this.subscr = this.myform.valueChanges.subscribe(({mychecbox}) => {
      console.log(mychecbox)
    })
  }

  ngAfterContentChecked(): void {
    this.inputValue = this.myform.get('searchInput')?.value
  }

  ngOnDestroy(): void {
    this.subscr.unsubscribe();
  }

}
