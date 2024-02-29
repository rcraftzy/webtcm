import { inject } from '@angular/core';
import { CanActivateFn, UrlTree } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Observable } from 'rxjs';

export const AuthGuard: CanActivateFn = (
  route,
  state,
):
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree => {
  return inject(AuthService).authenticated()
    ? true
    : inject(Router).navigate(['/admin/login']);
};
