import {Component, OnInit} from '@angular/core';
import {TreeItemInterface} from "./models/tree-item.interface";
import {TreeItems} from "./constants/tree-items";
import {FormBuilder, FormGroup} from "@angular/forms";
import {NodeBuilder} from "./services/node-builder.service";
import {Node} from "./models/node";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  items: Node[] = this.nodeBuilder.convertItemToNode(TreeItems);
  myform!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private nodeBuilder: NodeBuilder) {
  }

  ngOnInit(): void {
    this.myform = this.formBuilder.group({
      mychecbox: ''
    })

    this.myform.valueChanges.subscribe(({mychecbox}) => {
      console.log(mychecbox)
    })


  }

}
