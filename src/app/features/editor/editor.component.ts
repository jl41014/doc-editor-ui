import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import * as diff from 'diff';

import { DisclaimerService } from '../../services/disclaimer.service';
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {
  @Input()
  content: string = '';

  @Output()
  contentChange = new EventEmitter();

  @Output()
  changed: boolean = false;

  preContent: string = '';

  constructor(private disclaimersService: DisclaimerService) {}

  ngOnInit(): void {
    this.preContent = this.content;
    console.log(this.preContent);
  }

  inputText(event: any) {
    let changes = diff.diffWords(this.preContent, this.content);
    console.log(changes);
    this.contentChange.emit(this.content);
  }
}
