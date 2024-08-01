import { Driver } from "./driver.module";
import { Petition } from "./petition.module";
import { RegulationSanction } from "./regulation-sanction.model";
import { User } from "./user.module";

export interface Sanction {
  id: number;
  name: string;
  complaint : Petition;
  regulationSanction : RegulationSanction; // Ajusta el tipo según lo que realmente devuelva el JSON
  driver : Driver;
  admin: User;
  dateApplied : Date;
}
