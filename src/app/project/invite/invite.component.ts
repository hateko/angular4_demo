import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InviteComponent implements OnInit {

  items = [
    {
      id: 1,
      name: '张三'
    },
    {
      id: 2,
      name: '李四'
    },
    {
      id: 3,
      name: '汪汪'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  displayUser(user: {id: String, name: String}) {
    return user ? user.name : '';
  }

}
