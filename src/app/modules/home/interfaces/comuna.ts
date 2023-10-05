import { Provincia } from "./provincia";

export interface Comuna {
  comuna: ComunaClass;
}

export interface ComunaClass {
  name:         string;
  code:         string;
  contained_in: ContainedIn;
}

export interface ContainedIn {
  provincia: Provincia;
}
