import { Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2, private title: Title, private router: Router) {
    this.title.setTitle('[ERROR] - Página não encontrada')
  }

  ngOnInit(): void {
    this.renderer.addClass(this.document.body, 'main');
  }

  ngOnDestroy() {
    this.renderer.removeClass(this.document.body, 'main');
  }

  goToHome() {
    this.router.navigate(['/'])
  }

}
