import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import {Mediator} from './mediator.interface';
import {MediatorComplex} from './mediatorcomplex.interface';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MediatorService {

 
  private POST_MEDIATOR_URL = 'http://157.253.208.27:1234';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {}
 
  createMediator(mediator: Mediator): Observable<any> {
    return this.http.post(this.POST_MEDIATOR_URL, mediator, httpOptions);
  }
  createMediatorComplex(mediator: MediatorComplex): Observable<any> {
    return this.http.post(this.POST_MEDIATOR_URL, mediator, httpOptions);
  }
  getInfo(): Observable<any> {
    return this.http.get(this.POST_MEDIATOR_URL);
  }
}