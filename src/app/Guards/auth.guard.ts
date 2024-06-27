import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router)
  const auth = inject(AuthService)
  if(auth.showStatus()){
    return true
  }
  router.navigate(['/login'])
  return false
};
