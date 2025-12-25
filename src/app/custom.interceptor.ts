import { HttpInterceptorFn } from '@angular/common/http';

export const customInterceptor: HttpInterceptorFn = (req, next) => {
  const myToken = localStorage.getItem('token');
  const modifiedReq = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${myToken}`),
  });
  return next(modifiedReq);

};
