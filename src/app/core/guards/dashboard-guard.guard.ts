import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const dashboardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const response = localStorage.getItem('user') as string;
  const user = JSON.parse(response);

  if (!user) {
    return router.createUrlTree(['/auth']);
  } else return true;
};
