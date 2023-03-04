import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(private title: Title) {
    title.setTitle('App-Inscritor')
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
