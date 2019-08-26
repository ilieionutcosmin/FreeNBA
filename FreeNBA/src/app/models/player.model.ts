import { Team } from "./team.model";

export class Player {
  constructor(
    public id: number,
    public first_name: string,
    public height_feet: number,
    public height_inches: number,
    public last_name: string,
    public position: string,
    public team: Team,
    public weight_pounds: number,
  ) {
  }
}
