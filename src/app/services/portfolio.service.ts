import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private apiUrl = 'http://localhost:6006/portfolio';
  private _jsonData: any[] = [];

  constructor(private http: HttpClient) { }

  fetchPortfolioItems(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      tap(data => this._jsonData = data)
    );
  }

  addPortfolioItem (item: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, item);
  }

  get jsonData(): any[] {
    return this._jsonData;
  }

  getPaintingById(id: number) {
    return this._jsonData[id];
  }
}
