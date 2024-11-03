// authors.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author } from '../model/author';

const Url = 'http://localhost:8080/books-api/';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  constructor(private http: HttpClient) {}

  getAuthorById(id: number): Observable<Author> {
    return this.http.get<Author>(`${Url}authors/${id}`);
  }
}
