import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private url: string ="https://jsonplaceholder.typicode.com/users"
  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<any> {
    return this.httpClient.get(this.url)
  }
}
