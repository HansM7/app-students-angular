import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuardGuard: CanActivateFn = (route, state) => {
  console.log(['here in auth guard']);
  const router = inject(Router);

  const response = localStorage.getItem('user') as string;
  const user = JSON.parse(response);

  if (user) {
    console.log('render to dahboard');
    return router.createUrlTree(['/dashboard']);
  } else return true;
};
