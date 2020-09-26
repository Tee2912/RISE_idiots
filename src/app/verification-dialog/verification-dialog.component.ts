import { Component, OnInit, Inject, Optional } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-verification-dialog',
  templateUrl: './verification-dialog.component.html',
  styleUrls: ['./verification-dialog.component.scss']
})
export class VerificationDialogComponent implements OnInit {

  fromPage: string;
  fromDialog: string;

  constructor(
    public dialogRef: MatDialogRef<VerificationDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.fromPage = data.pageValue;
  }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close({ event: 'close', data: this.fromDialog });
  }

}
