import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionService } from '../services/session.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private readonly sessionService: SessionService 
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(this.sessionService.lastData) {
      const headers = new HttpHeaders({ authorization: 'Bearer ' + this.sessionService.lastData.token })
      const clone = request.clone({ headers: headers });
      return next.handle(clone);
    }
    return next.handle(request);
  }
}
