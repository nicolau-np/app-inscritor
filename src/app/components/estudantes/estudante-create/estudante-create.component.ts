import { DOCUMENT } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { ApiRequestService } from './../../../services/api-request.service';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-estudante-create',
  templateUrl: './estudante-create.component.html',
  styleUrls: ['./estudante-create.component.css']
})
export class EstudanteCreateComponent implements OnInit {

  data = {
    menu: 'Estudantes',
    submenu: 'Novo',
    type: 'estudantes'
  }

  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2, private title: Title, private api: ApiRequestService) {
    title.setTitle('[INSCRITOR] - Novo Estudante')
  }

  ngOnInit(): void {
    this.renderer.addClass(this.document.body, 'main')
  }

  ngOnDestroy() {
    this.renderer.removeClass(this.document.body, 'main')
  }

}
