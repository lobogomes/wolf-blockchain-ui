import {HttpHandlerFn, HttpRequest, HttpResponse} from "@angular/common/http";
import {inject} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {tap} from 'rxjs';


export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {
  const authToken = inject(AuthService).getAuthToken();

  const newReq = req.clone({
    headers: req.headers.append('X-Authentication-Token', authToken),
  });
  return next(newReq).pipe(

  );
}
