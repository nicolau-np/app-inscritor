import { LocalStorageService } from './local-storage.service';
import { API_PATH } from './../../environments/environments';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiAuthenticateService {
  private isLoggedIn = new BehaviorSubject<boolean>(false)

  constructor(private http: HttpClient, private localstorage: LocalStorageService) { }

  toggleLogin(state: boolean): void {
    this.isLoggedIn.next(state)
  }

  status() {
    if (!this.localstorage.getLocalStorageUser()) {
      this.isLoggedIn.next(false)
      console.log('usuario nao esta logado!')
    } else {
      this.isLoggedIn.next(true)
      this.user().subscribe(() => {
        console.log('usuario logado!')
        this.isLoggedIn.next(true)
      }, () => {
        console.log('usuario nao esta logado!')
        this.isLoggedIn.next(false)
      })

    }

    return this.isLoggedIn.asObservable();
  }

  login(data: any) {
    return this.http.post(API_PATH + "/auth/login", data)
  }

  user() {
    return this.http.get(API_PATH + '/user', { headers: this.localstorage.getHeadersAuthenticationUser() })
  }

  logout() {
    return this.http.post(API_PATH + '/auth/logout', { allDevice: true }, { headers: this.localstorage.getHeadersAuthenticationUser() })
  }
}
