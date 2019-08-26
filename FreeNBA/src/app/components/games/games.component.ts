import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../services/games.service';
import { Pagination } from '../../models/pagination.model';
import { Game } from '../../models/game.model';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
  providers: [GamesService]
})

export class GamesComponent implements OnInit {
  games: Game[];
  pagination: Pagination = new Pagination();

  constructor(private gamesService: GamesService) {
    this.loadData();
  }

  ngOnInit() {
  }

  loadData() {
    this.gamesService.getAll(this.pagination).subscribe(this.onSuccess.bind(this), this.onError);
  }
  changePage(event) {
    console.log(event)
    this.pagination.current_page = event.pageIndex + 1;
    this.pagination.per_page = event.pageSize;
    this.loadData();
  }

  // events
  onSuccess({ data, meta }) {
    this.games = data;
    this.pagination = meta;
  }

  onError(err) {
    alert(err);
  }

}
