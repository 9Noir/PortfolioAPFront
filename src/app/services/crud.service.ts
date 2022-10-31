import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  constructor(private http: HttpClient) { }

  getAll(url: string): Observable<any> {
    return this.http.get<any>(`${url}`)
  }

  public save(url: string, any: any): Observable<any> {
    return this.http.post<any>(`${url}`, any);
  }

  public update(url: string, any: any): Observable<any> {
    return this.http.put<any>(`${url}`, any)
  }

  public delete(url: string, id: number): Observable<void> {
    return this.http.delete<void>(`${url}/${id}`);
  }

}

