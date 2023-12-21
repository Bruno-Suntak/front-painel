import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RelatorioService {
  private apiUrl = 'http://localhost:3000/api/report';

  constructor(private http: HttpClient) {}

  obterDadosRelatorio(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}