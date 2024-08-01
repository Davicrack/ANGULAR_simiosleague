import { Nationality } from "./enum/Nationality";

export interface Team {
  id: number;
  name: string;
  base : string;
  teamPrincipal : string; // Ajusta el tipo según lo que realmente devuelva el JSON
  baseNationality : Nationality;
  imagePath: string;
}