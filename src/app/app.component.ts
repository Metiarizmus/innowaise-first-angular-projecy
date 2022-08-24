import {Component, OnInit} from '@angular/core';
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
  items: Node[] = this.cs.convertItemToNode(TreeItems);
  myform!: FormGroup;

  inputValue!: string;

  constructor(private fb: FormBuilder,
              private cs: NodeBuilder) {
  }

  ngOnInit(): void {
    this.myform = this.fb.group({
      mychecbox: ''
    })

    this.myform.valueChanges.subscribe(({mychecbox}) => {
      //console.log(mychecbox)
    })
  }

  onKey(event: Event) {
    // @ts-ignore
    this.inputValue = event.target.value;
  }


}
