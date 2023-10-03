import { NgModule } from "@angular/core";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

@NgModule({
  declarations:[],
  imports: [],
  exports: [ MatToolbarModule, MatFormFieldModule, MatInputModule, MatSelectModule ]
})
export class MaterialModule { }
