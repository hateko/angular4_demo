import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  title = '';
  constructor(
    @Inject(MAT_DIALOG_DATA)
    private data,
    private dialogRef: MatDialogRef<NewProjectComponent>,
    private oc: OverlayContainer
  ) { }

  ngOnInit() {
    this.title = this.data.title;
    console.log(JSON.stringify(this.data));
    this.oc.getContainerElement().classList.add('my-theme-class');
  }

  onClick() {
    this.dialogRef.close('receive!~~~~hahahah');
  }

}
