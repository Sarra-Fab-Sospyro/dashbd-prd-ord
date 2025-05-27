import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { APP_CONFIG_TOKEN } from '../environment/environment';

export const environmentInterceptor: HttpInterceptorFn = (req, next) => {

  const prefix = inject(APP_CONFIG_TOKEN)
  const reqModified = req.clone({ url: prefix.apiUrl + req.url })
  return next(reqModified);
};
