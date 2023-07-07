import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { TokenModel } from 'src/app/core/models/token.model';
import { SessionService } from 'src/app/core/services/session.service';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private readonly http: HttpClient,
    private readonly sessionService: SessionService,
  ) { }

  login(form: any) {
    return this.http.post<TokenModel>(environment.base_api_url + '/login', form, { reportProgress: true })
      .pipe(tap(result => this.sessionService.start(result)));
  }
}
