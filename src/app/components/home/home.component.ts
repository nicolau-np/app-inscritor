import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private title: Title) {
    title.setTitle('[INSCRITOR] - Sistema de Seleção Automática')
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
