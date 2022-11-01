import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  constructor(private http: HttpClient) { }
  apiUrl = environment.apiUrl;
  
  getAll(url: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${url}`)
  }

  public save(url: string, any: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}${url}`, any);
  }

  public update(url: string, any: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}${url}`, any)
  }

  public delete(url: string, id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${url}/${id}`);
  }

}

