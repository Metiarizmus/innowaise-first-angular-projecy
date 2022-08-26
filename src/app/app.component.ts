import {Component, OnDestroy, OnInit} from '@angular/core';
import {TreeItems} from "./constants/tree-items";
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {NodeBuilder} from "./services/node-builder.service";
import {Node} from "./models/node";
import {Subscription} from "rxjs";
import {FormGroupInterface} from "./models/form-group.interface";

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {
   items!: Node[];
   treeForm!: FormGroup;

   subscr = new Subscription();

   constructor(private formBuilder: FormBuilder,
               private nodeBuilder: NodeBuilder) {
   }

   ngOnInit(): void {
      this.items = this.nodeBuilder.convertItemToNode(TreeItems);

      this.treeForm = this.formBuilder.group<FormGroupInterface>({
         mychecbox: new FormControl(['1','10','8','2']),
         searchInput: new FormControl()
      })

      this.subscr = this.treeForm.valueChanges.subscribe(({mychecbox}) => {
         console.log(mychecbox)
      })

   }

   ngOnDestroy(): void {
      this.subscr.unsubscribe();
   }
}
