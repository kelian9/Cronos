import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from './data';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CallbackService {

  constructor(private http: HttpClient) { }

  public send(data: Data): Observable<Data> {
    return this.http.post<Data>('/api/users', data);
  }

}
