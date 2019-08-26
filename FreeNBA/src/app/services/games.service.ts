import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from '../models/game.model';
import { Pagination } from '../models/pagination.model';

@Injectable()
export class GamesService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'https://free-nba.p.rapidapi.com';

  headers: HttpHeaders = new HttpHeaders({
    "x-rapidapi-host": "free-nba.p.rapidapi.com",
    "x-rapidapi-key": "5fdbae96c6msh0633d042fabce67p1d617ajsn32d166d10e23"
  });

  getAll(pagination: Pagination) {
    // couldnt find the way to filter by seasons, i tried from the API page but it looks like it does not filter
    let params = new HttpParams()
      .set('page', pagination.current_page.toString())
      .set('per_page', pagination.per_page.toString())
      .set('Seasons', '2017,2018');
    console.log(params.toString())
    return this.http.get<{ data: Game[], meta: Pagination }>(`${this.baseUrl}/games`, { headers: this.headers, params: params });
  }
}
