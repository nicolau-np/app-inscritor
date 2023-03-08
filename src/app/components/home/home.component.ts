import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Output, EventEmitter, Inject, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data = {
    menu: 'Principal',
    submenu: null,
    type: 'home'
  }

  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2, private title: Title) {
    title.setTitle('[INSCRITOR] - Sistema de Seleção Automática')

  }

  ngOnInit(): void {
    this.renderer.addClass(this.document.body, 'main');
   
  }

  ngOnDestroy() {
    this.renderer.removeClass(this.document.body, 'main');
  }

}
