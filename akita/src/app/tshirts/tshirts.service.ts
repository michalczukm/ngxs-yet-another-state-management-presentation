import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tshirt } from './tshirt.model';

@Injectable({
  providedIn: 'root',
})
export class TshirtsService {
  constructor(private http: HttpClient) {}

  public GetAll(): Observable<Tshirt[]> {
    return this.http.get<Tshirt[]>('http://localhost:3000/tshirts');
  }
}
