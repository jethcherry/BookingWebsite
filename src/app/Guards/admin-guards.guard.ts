import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const router =inject(Router)
  const auth = inject(AuthService)

  if(auth.showStatus() && auth.isAdmin()){
    return true

  }
  router.navigate(['/home'])
  return false;
};
