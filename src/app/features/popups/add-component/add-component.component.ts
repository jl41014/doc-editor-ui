import { Component, EventEmitter, Output } from '@angular/core';
import { DisclaimerService } from 'src/app/services/disclaimer.service';

@Component({
  selector: 'app-add-component',
  templateUrl: './add-component.component.html',
  styleUrls: ['./add-component.component.scss']
})
export class AddComponentComponent {

  @Output()
  nameChanged = new EventEmitter();

  name: string = "";

  constructor(public disclaimerService: DisclaimerService) {

  }

  add() {
    this.nameChanged.emit(name);
    this.disclaimerService.addDisclaimer({
      name: this.name
    }).subscribe(data => {
      console.log(data);
    });
  }
}
