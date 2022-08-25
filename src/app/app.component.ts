import {Component, OnDestroy, OnInit} from '@angular/core';
import {TreeItems} from "./constants/tree-items";
import {FormControl, FormGroup} from "@angular/forms";
import {NodeBuilder} from "./services/node-builder.service";
import {Node} from "./models/node";
import {Subscription} from "rxjs";
import {FormInterface} from "./models/form.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {
  items!: Node[];

  myform = new FormGroup<FormInterface>({
    mychecbox: new FormControl<any>(false)
  })

  subscr!: Subscription;

  constructor(private nodeBuilder: NodeBuilder) {
  }

  ngOnInit(): void {

    this.items = this.nodeBuilder.convertItemToNode(TreeItems);

    this.subscr = this.myform.valueChanges.subscribe(({mychecbox}) => {
      console.log(mychecbox)
    })
  }

  ngOnDestroy(): void {
    this.subscr.unsubscribe();
  }
}
