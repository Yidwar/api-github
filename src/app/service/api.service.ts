import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private urlApi = 'https://api.github.com/search/repositories?q=stars:>0&sort=stars&order=desc&page=1&per_page=10';

  constructor(private http: HttpClient) { }

  public getdata() : Observable<any>{
    return this.http.get<any>(this.urlApi);
  }

}
