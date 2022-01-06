import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class IsAdminGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 2000);
    });
  }
}
