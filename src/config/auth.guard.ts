import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { ConfigService } from './config.service';
import { inject } from '@angular/core';

export const AuthGuard: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(ConfigService);
  const router = inject(Router);

  if (authService.token) {
    // Inicia sesión para devolver true
    return true;
  } else {
    // No conectado, redirigir a la página de sesión con la url de retorno
    return router.createUrlTree(['/login']);
  
  }
};
