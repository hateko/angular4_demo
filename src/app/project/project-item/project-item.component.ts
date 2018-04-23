import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { Output } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent implements OnInit {

  @Input() item;

  @Output() onInvite = new EventEmitter<void>();
  @Output() onEdit = new EventEmitter<void>();
  @Output() onDel = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onInviteClick() {
    console.log('invite!!!');
    this.onInvite.emit();
  }

  onEditClick() {
    this.onEdit.emit();
  }

  onDelClick() {
    this.onDel.emit();
  }


}
