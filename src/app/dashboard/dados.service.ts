import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  readonly dados = [
    ['janeiro', 33],
    ['fevereiro', 68],
    ['março', 55],
    ['abril', 39],
    ['maio', 87],
    ['junho', 73],
  ];

  constructor() { }

  oberDados():Observable<any>{
    return new Observable(observable =>{
      observable.next(this.dados);
      observable.complete();
    })
  }
}
