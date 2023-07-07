import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { SessionService } from 'src/app/core/services/session.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private readonly httpClient: HttpClient,
    private readonly sessionService: SessionService,
  ) { }

  get(page: number = 1): Observable<Book[]> {
    const params= new HttpParams({fromObject: {
      page,
    }});
    return this.httpClient.get<Book[]>(environment.base_api_url + '/book', { params, reportProgress: true });
  }

  post(value: any) {
    return this.httpClient.post<Book>(environment.base_api_url + '/book', value, { reportProgress: true });
  }
}
