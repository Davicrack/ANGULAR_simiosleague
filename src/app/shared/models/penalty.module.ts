import { Driver } from "./driver.module";
import { Race } from "./race.module";

export interface Penalty {
  id: number;
  race : Race;
  driver : Driver;
  description : String;
  penaltyType : PenaltyType;
  value : String
 }