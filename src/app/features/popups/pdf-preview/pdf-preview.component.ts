import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DisclaimerService } from '../../../services/disclaimer.service';
@Component({
  selector: 'app-pdf-preview',
  templateUrl: './pdf-preview.component.html',
  styleUrls: ['./pdf-preview.component.scss'],
})
export class PdfPreviewComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<PdfPreviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public disclamerService: DisclaimerService
  ) {}

  ngOnInit(): void {
    
  }
}
