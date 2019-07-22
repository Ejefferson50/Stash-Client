import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entity } from './entity';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private testEntityUrl = environment.apiUrl + 'api/v1/test/';

  constructor(private http: HttpClient) { }

  getTestEntities(): Observable<Entity> {
    console.log(this.testEntityUrl);
    return this.http.get<Entity>(this.testEntityUrl).pipe(
      tap(_ => console.log('getting test entities from remote url.'))
    );
  }
}
