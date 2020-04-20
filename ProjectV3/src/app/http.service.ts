import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  configUrl = 'assets/config.json';
  constructor(private http: HttpClient) { }
  getConfig() {
    this.http.get(this.configUrl);
  }
}
