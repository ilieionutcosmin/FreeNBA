import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesComponent } from './components/games/games.component';
import { TeamPlayersComponent } from './components/team-players/team-players.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'games',
  pathMatch: 'full',
},
{
  path: 'games',
  component: GamesComponent
},
{
  path: 'team-players/:id',
  component: TeamPlayersComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
