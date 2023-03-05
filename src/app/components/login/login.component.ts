import { Title } from '@angular/platform-browser';
import { Component, EventEmitter, Inject, OnInit, Output, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document:Document,
  private renderer: Renderer2,
  private title: Title,
  private toastr: ToastrService) {
    title.setTitle('Login')

  }

  ngOnInit(): void {
    this.renderer.addClass(this.document.body, 'login');
    throw new Error('Method not implemented.');
  }

  ngOnDestroy() {
    this.renderer.removeClass(this.document.body, 'login');
  }

  open(){
    this.toastr.success("Mensagem", "title")
  }

}
