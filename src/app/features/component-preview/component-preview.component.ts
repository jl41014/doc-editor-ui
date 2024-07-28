import { Component, OnInit, Input , Output, EventEmitter } from '@angular/core';
import { DisclaimerService } from '../../services/disclaimer.service';
@Component({
  selector: 'app-component-preview',
  templateUrl: './component-preview.component.html',
  styleUrls: ['./component-preview.component.scss'],
})
export class ComponentPreviewComponent {
  @Input()
  content: any = [];

  @Output()
  contentChange = new EventEmitter();

  editing: boolean = false;

  isBlur = true;

  constructor(private disclaimersService: DisclaimerService) {}

  ngOnInit(): void {
  }

  checkValue() {
    console.log(this.content);
  }

  compositionstart() {
    this.editing = true;
    this.isBlur = false;
  }

  compositionend(key: any, text: any) {
    this.editing = false;
    this.content[key] = text;
    this.contentChange.emit(this.content);
  }

  inputText(key: any, text: any, target: any) {
    this.isBlur = false;
    // if(!this.editing) {
    //   this.content[key] =  text;
    //   this.contentChange.emit(this.content);
    // }
  }

  trackByFn(index: any, item: any) {
    return index;
  }

  blur(key: any, target: any) {
    if (this.isBlur) {
      this.content[key] = target.value;
      this.contentChange.emit(this.content);
    }
  }
}
