import { Component, OnInit } from '@angular/core';
import { DisclaimerService } from '../../services/disclaimer.service';
import { MatDialog } from '@angular/material/dialog';
import { PdfPreviewComponent } from '../popups/pdf-preview/pdf-preview.component';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { DomSanitizer } from '@angular/platform-browser';
import { AddComponentComponent } from '../popups/add-component/add-component.component';
@Component({
  selector: 'app-termsheet-dashboard',
  templateUrl: './termsheet-dashboard.component.html',
  styleUrls: ['./termsheet-dashboard.component.scss'],
})
export class TermsheetDashboardComponent implements OnInit {
  data: any = {};

  todo: string[] = [];

  done: string[] = [];

  previewList: any = [];

  pdf: any;

  mode: string = 'preview';

  sortingDisabled: boolean = true;

  editConent: string = '';

  locate: Map<string, number> = new Map();

  constructor(
    private disclaimersService: DisclaimerService,
    private sanitizer: DomSanitizer,
    public dialog: MatDialog
  ) {}

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      moveItemInArray(
        this.previewList,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      if (this.mode === 'edit') {
        this.chooseEditItem(event.previousIndex);
      } else {
        if (event.previousContainer.id === 'termsheet-editing-list') {
          this.previewList.splice(event.previousIndex, 1);
        } else {
          this.previewList.splice(event.currentIndex, 0, {
            key: this.todo[event.previousIndex],
            data: this.data[this.todo[event.previousIndex]],
          });
        }

        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex
        );

        if (event.previousContainer.id === 'termsheet-editing-list') {
          this.resort()
        } 
      }
    }
  }

  ngOnInit(): void {
    this.disclaimersService.getDisclaimer().subscribe((data: any) => {
      console.log(data)
      this.data = data

      for (let item of this.data) { 
        this.todo.push(item.name);
        this.locate.set(item.name, item.sequence);
      }
    });
  }

  remove(index: any) {
    this.previewList.splice(index, 1);
    let item = this.done.splice(index, 1);
    this.todo.push(item[0]);
    this.resort();
  }

  resort() {
    this.todo = this.todo.sort((a: string, b: string) => {
      let locateA = this.locate.get(a);
      locateA = locateA === undefined ? 0 : locateA;
      let locateB = this.locate.get(b);
      locateB = locateB === undefined ? 0 : locateB;
      return locateA - locateB;
    });
  }


  viewPDF() {
    if (this.mode === 'preview') {
      this.disclaimersService.getPDF().subscribe((data) => {
        this.openPDFPopup(data);
      });
    } else if (this.mode === 'edit') {
      let tmp = JSON.parse(JSON.stringify(this.data));
      tmp[this.done[0]] = this.editConent;
      this.disclaimersService.getEditedPDF(tmp).subscribe((data) => {
        this.openPDFPopup(data);
      });
    }
  }

  switchMode(mode: string) {
    this.mode = mode;
    if (mode == 'edit') {
      this.mode = mode;
      this.editConent = this.data[this.todo[0]];
      transferArrayItem(this.todo, this.done, 0, 0);
    } else {

    }
  }

  sortToggle() {
    this.sortingDisabled = !this.sortingDisabled;
  }

  chooseEditItem(preIndex: any) {
    this.editConent = this.data[this.todo[preIndex]];
    transferArrayItem(this.todo, this.done, preIndex, 1);
    this.remove(0);
  }

  save() {

  }

  openPDFPopup(pdf: any) {
    const blob = new Blob([pdf], {
      type: 'application/pdf',
    });

    this.pdf = this.sanitizer.bypassSecurityTrustResourceUrl(
      window.URL.createObjectURL(blob)
    );

    this.dialog.open(PdfPreviewComponent, {
      height: '900px',
      width: '1000px',
      data: {
        pdf: this.pdf,
      },
    });
  }

  openNewComponentPopup() {
    this.dialog.open(AddComponentComponent, {
      height: '240px',
      width: '266px'
    });
  }
}
