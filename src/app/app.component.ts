import {Component, OnInit} from '@angular/core';
import {ITreeItem} from "./interfaces/ITreeItem";
import {TREE_ITEMS} from "./consts/TREE_ITEMS";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ItemConverterService} from "./services/item-converter.service";
import {Node} from "./models/node";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  items: Node[] = this.cs.convertToClass(TREE_ITEMS);
  myform!: FormGroup;

  constructor(private fb: FormBuilder,
              private cs: ItemConverterService) {
  }

  ngOnInit(): void {
    this.myform = this.fb.group({
      mychecbox: ''
    })

    const newTree = this.cs.convertToClass(TREE_ITEMS)

    this.myform.valueChanges.subscribe(({mychecbox}) => {

      // this.items = newTree.map(x => {
      //   x.operation(mychecbox)
      //   return x;
      // })
      // console.log(newTree)
    })


  }

}
