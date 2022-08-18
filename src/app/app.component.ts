import {Component, OnInit} from '@angular/core';
import {TreeItem} from "./interfaces/TreeItem";
import {TREE_ITEMS} from "./consts/TREE_ITEMS";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  items: TreeItem[] = TREE_ITEMS;

  form!: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      mycheckbox: ['']
    })
  }

}
