import { LocalStorageService } from './local-storage.service';
import { HttpClient } from '@angular/common/http';
import { API_PATH } from './../../environments/environments';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {
  constructor(private http: HttpClient, private localstorage: LocalStorageService) { }

  index(url: string) {
    return this.http.get(API_PATH + url, { headers: this.localstorage.getHeadersAuthenticationUser() })
  }

  show(url: string, id: number) {
    return this.http.get(API_PATH + url + "/" + id, { headers: this.localstorage.getHeadersAuthenticationUser() })
  }

  store(url: string, data: any) {
    return this.http.post(API_PATH + url, data, { headers: this.localstorage.getHeadersAuthenticationUser() })
  }

  update(url: string, data: any, id: number) {
    return this.http.put(API_PATH + url + "/" + id, data, { headers: this.localstorage.getHeadersAuthenticationUser() })
  }

  destroy(url: string, id: number) {
    return this.http.delete(API_PATH + url + "/" + id, { headers: this.localstorage.getHeadersAuthenticationUser() })
  }

  paginate(url: string) {
    return this.http.get(url, { headers: this.localstorage.getHeadersAuthenticationUser() })
  }

  search(url: string, data: any) {
    return this.http.post(API_PATH + url, data, { headers: this.localstorage.getHeadersAuthenticationUser() })
  }

  download(url: string, id: number) {
    return this.http.get(API_PATH + url + '/' + id, {
      responseType: 'blob' as 'json',
      headers: this.localstorage.getHeadersAuthenticationUser(),
    });
  }
}
