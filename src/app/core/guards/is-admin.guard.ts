import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from '../services/session.service';

@Injectable({
  providedIn: 'root'
})
export class IsAdminGuard {

  constructor(
    private readonly sessionService: SessionService,
    private readonly router: Router,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const role = this.sessionService.lastData?.role;
      if(!role) {
        this.router.navigate(['auth', 'login']);
      } else if(role !== 'Admin') {
        this.router.navigate(['book', 'index']);
      }
      return role === 'Admin'; 
  }
  
}
