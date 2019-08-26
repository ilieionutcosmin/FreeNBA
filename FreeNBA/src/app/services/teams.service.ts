import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Team } from '../models/team.model';

@Injectable()
export class TeamsService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'https://free-nba.p.rapidapi.com';

  headers: HttpHeaders = new HttpHeaders({
    "x-rapidapi-host": "free-nba.p.rapidapi.com",
    "x-rapidapi-key": "5fdbae96c6msh0633d042fabce67p1d617ajsn32d166d10e23"
  });

  get(id: string) {
    return this.http.get<Team>(`${this.baseUrl}/teams/${id}`, { headers: this.headers });
  }
}
