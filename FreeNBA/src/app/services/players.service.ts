import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pagination } from '../models/pagination.model';
import { Player } from '../models/player.model';

@Injectable()
export class PlayersService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'https://free-nba.p.rapidapi.com';

  headers: HttpHeaders = new HttpHeaders({
    "x-rapidapi-host": "free-nba.p.rapidapi.com",
    "x-rapidapi-key": "5fdbae96c6msh0633d042fabce67p1d617ajsn32d166d10e23"
  });

  getAll(pagination: Pagination) {
    let params = new HttpParams()
      .set('page', pagination.current_page.toString())
      .set('per_page', pagination.per_page.toString());

    return this.http.get<{ data: Player[], meta: Pagination }>(`${this.baseUrl}/players`, { headers: this.headers, params: params });
  }
}
