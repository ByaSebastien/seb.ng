import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  findByKeyWord(keyword: string) {
    const params = new HttpParams({fromObject: { keyword }});
    return this.httpClient.get<any[]>(environment.base_api_url + '/author', { params });
  }
}
