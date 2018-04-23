import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() item;
  @Input() avater;
  @Output() taskClick = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
    this.avater = this.item.owner ? this.item.owner.avater : 'unassigned';
  }

  onItemClick() {
    this.taskClick.emit();
  }

  onCheckBoxClick(ev: Event) {
    ev.stopPropagation();
  }
}
