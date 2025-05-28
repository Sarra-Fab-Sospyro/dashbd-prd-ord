import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { APP_CONFIG_TOKEN } from '../environment/environment';
import { delay, finalize } from 'rxjs';
import { LoadingService } from '../services/loading.service';

export const environmentInterceptor: HttpInterceptorFn = (req, next) => {
  let serviceSpinner = inject(LoadingService);

  serviceSpinner.startSpinner();
  const prefix = inject(APP_CONFIG_TOKEN)
  const reqModified = req.clone({ url: prefix.apiUrl + req.url })

  return next(reqModified).pipe(
    // delay(3000),

    finalize(() => serviceSpinner.endSpinner())
  );
};
