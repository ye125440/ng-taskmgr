import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Quote } from '../core/domain/quote.model';
import { Http } from '@angular/http';

@Injectable()
export class QuoteService {

  constructor(private http: Http, @Inject('BASE_CONFIG') private config) { }

  getQuote(): Observable<Quote> {
    const uri = `${this.config.uri}/quotes/${Math.floor(Math.random() * 9)}`;
    console.log(uri);
    return this.http.get(uri)
               .debug('quote: ')
               .map(res => res.json() as Quote);
  }

}
