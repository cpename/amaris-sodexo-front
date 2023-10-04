import { Provincia } from "./provincia";

export interface Comuna {
}

export interface ComunaClass {
  name:         string;
  code:         string;
  contained_in: ContainedIn;
}

export interface ContainedIn {
  provincia: Provincia;
}
