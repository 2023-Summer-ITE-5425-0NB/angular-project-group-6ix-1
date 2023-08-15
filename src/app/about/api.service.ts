import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { About } from './about';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
    private url: string = 'http://localhost:6006/about';
    constructor(private http: HttpClient) {}
  
    getPosts(): Observable<About[]> {
      return this.http.get<About[]>(this.url);
    }
}
