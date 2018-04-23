import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @Output() toggle = new EventEmitter<void>();
  @Output() toggleDarkTheme = new EventEmitter<boolean>();

  ngOnInit() {
  }

  openSidebar() {
    console.log(this.toggle);
     this.toggle.emit();
  }

  onChange(checked: boolean) {
    this.toggleDarkTheme.emit(checked);
  }

}
