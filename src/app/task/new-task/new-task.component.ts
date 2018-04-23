import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  title: '';
  priorities = [
    {
      label: '紧急',
      value: 1
    },
    {
      label: '重要',
      value: 2
    },
    {
      label: '普通',
      value: 3
    }
  ];
  constructor(
    @Inject(MAT_DIALOG_DATA)
    private data,
    private dialogRef: MatDialogRef<NewTaskComponent>,
  ) { }

  ngOnInit() {
    this.title = this.data.title;
    console.log(this.data);
  }

  onClick() {
    this.dialogRef.close('receive!~~~~hahahah');
  }

}
