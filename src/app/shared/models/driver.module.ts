import { DriverType } from "./enum/DriverType";
import { Nationality } from "./enum/Nationality";
import { Team } from "./team.module";

export interface Driver {
  id: number;
  name: string;
  nationality: Nationality;
  birthDate: Date; // Ajusta el tipo según lo que realmente devuelva el JSON
  type : DriverType;
  team: Team; // Ajusta el tipo según lo que realmente devuelva el JSON
  imagePATH : String;
}