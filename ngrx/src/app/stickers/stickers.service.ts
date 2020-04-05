import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sticker } from './sticker.model';

@Injectable()
export class StickersService {
  constructor(private http: HttpClient) {}

  public getAll(): Observable<Sticker[]> {
    return this.http.get<Sticker[]>('http://localhost:3000/stickers');
  }
}
