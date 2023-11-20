import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const response = localStorage.getItem('user') as string;
  const user = JSON.parse(response);

  if (user) {
    return router.createUrlTree(['/dashboard']);
  } else return true;
};
