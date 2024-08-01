import { Circuit } from "./circuit.model";
import { Season } from "./season.module";

export interface Race {
  id: number;
  circuit: Circuit;
  date : Date;
  season : Season;
}