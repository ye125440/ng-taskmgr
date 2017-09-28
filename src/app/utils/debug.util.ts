import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

declare module 'rxjs/Observable' {
  interface Observable<T> {
    debug: (...any) => Observable<T>;
  }
}

Observable.prototype.debug = function (message: string) {
  return this.do(
    (next) => {
      if (!environment.production) { // 非生产环境下
        console.log(message, next);
      }
    },
    (error) => {
      if (!environment.production) {
        console.error('ERROR>>' + message, error);
      }
    },
    () => {
      if (!environment.production) {
        console.log('Completed - ');
      }
    }
  );
};
