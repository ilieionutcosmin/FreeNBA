import { Team } from "./team.model";

export class Game {
  constructor(
    public id: number,
    public date: Date,
    public home_team: Team,
    public home_team_score: number,
    public period: number,
    public postseason: boolean,
    public season: number,
    public status: string,
    public time: string,
    public visitor_team: Team,
    public visitor_team_score: number,

  ) {
  }
}
