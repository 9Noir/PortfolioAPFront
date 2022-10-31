import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = "/api";
  currentUserSubject: BehaviorSubject<any>;
  parcero: boolean | undefined;
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(
      JSON.parse(sessionStorage.getItem('currentUser') || '{}')
    );
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.url}/login`, credentials).pipe(
      map((data) => {
        sessionStorage.setItem('currentUser', JSON.stringify(data));
        this.currentUserSubject.next(data);

        this.parcero = true;

        return data;
      })
    );
  }

  get AuthenticatedUser() {
    return this.currentUserSubject.value;
  }

  loggedIn() {
    return this.parcero;
  }

  logout() {
    this.parcero = false;
    sessionStorage.clear();
    localStorage.clear();
    this.currentUserSubject.next(null);
  }
}