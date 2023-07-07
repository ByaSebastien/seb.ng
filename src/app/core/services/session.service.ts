import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TokenModel } from '../models/token.model';

const storageKey = 'SESSION'

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private _data$: BehaviorSubject<TokenModel|null> = new BehaviorSubject<TokenModel|null>(null);

  get data$(): Observable<TokenModel|null> {
    return this._data$.asObservable();
  }

  get lastData(): TokenModel|null {
    return this._data$.value;
  }

  constructor() { 
    const json = localStorage.getItem(storageKey);
    if(json) {
      this._data$.next(JSON.parse(json));
    }
  }

  start(token: TokenModel) {
    this._data$.next(token);
    localStorage.setItem(storageKey, JSON.stringify(token))
  }

  stop() {
    this._data$.next(null);
    localStorage.clear();
  }
}
