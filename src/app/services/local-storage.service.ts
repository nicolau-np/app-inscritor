import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  getLocalStorageUser(){
    return localStorage.getItem('user')
  }

  transformLocalStorageUser(){
    const user:any = localStorage.getItem('user')
    return JSON.parse(user)
  }

  getTokenUser(){
    const user:any = localStorage.getItem('user')
    const userobj:any = JSON.parse(user)
    return userobj.message.token
  }

  getHeadersAuthenticationUser(){
    const user:any = localStorage.getItem('user')
    const userobj:any = JSON.parse(user)
    const token = userobj.message.token

    return new HttpHeaders({
      Authorization: 'Bearer ' + token,
    })
  }
}
