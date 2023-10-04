import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormBuilder } from "@angular/forms";



@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule, MaterialModule
  ]
})
export class HomeModule {


  comunasArray: string[] = ['Huechuraba', 'Puente Alto', 'Providencia', 'San Bernardo', 'Alto Hospicio'];


}
