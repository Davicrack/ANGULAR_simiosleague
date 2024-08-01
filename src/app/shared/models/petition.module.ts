import { Driver } from "./driver.module";

export interface Petition {
  id: number;
  description : String;
  url : String;
  driver : Driver;
  createdBy : String;
  createdAt : Date;
 }