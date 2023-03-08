import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() public paren: any

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  onLogout() {
    this.router.navigate(['/user/login'])
  }

}
