import { Component, OnInit } from '@angular/core';
import { Pagination } from '../../models/pagination.model';
import { Player } from '../../models/player.model';
import { Team } from '../../models/team.model';
import { PlayersService } from '../../services/players.service';
import { TeamsService } from '../../services/teams.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-players',
  templateUrl: './team-players.component.html',
  styleUrls: ['./team-players.component.scss'],
  providers: [PlayersService, TeamsService]
})
export class TeamPlayersComponent implements OnInit {
  players: Player[];
  pagination: Pagination = new Pagination();
  team: Team;

  constructor(private playersService: PlayersService,
    private teamsService: TeamsService,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    // I didnt find the API to take the players of a team
    this.pagination.per_page = 5;
    this.playersService.getAll(this.pagination).subscribe(this.onSuccess.bind(this), this.onError);
    this.teamsService.get(this.route.snapshot.paramMap.get('id')).subscribe(this.onSuccessTeam.bind(this), this.onError);
  }

  // events
  onSuccess({ data, meta }) {
    this.players = data;
    this.pagination = meta;
  }
  onSuccessTeam(team: Team) {
    this.team = team;
  }

  onError(err) {
    alert(err);
  }
}
