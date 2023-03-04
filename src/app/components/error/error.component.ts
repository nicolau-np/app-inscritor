import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  data = {
    menu: 'Error',
    submenu: null,
    type: 'error'
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
