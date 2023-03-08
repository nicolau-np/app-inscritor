import { Title } from '@angular/platform-browser';
import { Component, EventEmitter, Inject, OnInit, Output, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(@Inject(DOCUMENT) private document:Document,
  private renderer: Renderer2,
  private title: Title) {
    title.setTitle('Login')
  }

  ngOnInit(): void {
    this.renderer.addClass(this.document.body, 'login');

  }

  ngOnDestroy() {
    this.renderer.removeClass(this.document.body, 'login');
  }



}
