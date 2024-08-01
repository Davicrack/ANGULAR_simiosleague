import { Driver } from "./driver.module";
import { Race } from "./race.module";
import { Team } from "./team.module";

export interface RaceResult {
  id: number;
  race : Race;
  driver : Driver;
  team : Team;
  position : number;
  points : number;
  fastestLap : boolean;
}