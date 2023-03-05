import { DOCUMENT } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { ApiRequestService } from './../../../services/api-request.service';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-estudante-list',
  templateUrl: './estudante-list.component.html',
  styleUrls: ['./estudante-list.component.css']
})
export class EstudanteListComponent implements OnInit {

  data = {
    menu: 'Estudantes',
    submenu: 'Listar',
    type: 'estudantes'
  }

  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2, private title: Title, private api: ApiRequestService) {
    title.setTitle('[INSCRITOR] - Listar Estudantes')
  }

  ngOnInit(): void {
    this.renderer.addClass(this.document.body, 'main')
  }

  ngOnDestroy() {
    this.renderer.removeClass(this.document.body, 'main')
  }

}
