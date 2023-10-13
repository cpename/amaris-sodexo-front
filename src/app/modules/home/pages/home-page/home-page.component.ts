import { Component, OnInit } from '@angular/core';
import { Comuna } from '../../interfaces/comuna';
import { HomeService } from '../../services/home.service';
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  comunas: Comuna[] = [];
  // selectedValue: string = "";
  checkoutForm!: FormGroup;

  constructor(
    private homeService: HomeService,
    private formBuilder: FormBuilder
  ){
    this.checkoutForm = new FormGroup({
      nombre: new FormControl(),
      apellido: new FormControl(),
      telefono: new FormControl(),
      comunaCode: new FormControl()
    });
  }

  ngOnInit(): void {
    this.homeService.getComunas().subscribe(
      respComunas => {
        this.comunas = respComunas;
      }
    );
  }

  public buscarUsuario() {
    this.homeService.getUsuarios().subscribe(
      respUsuarios => {
        console.log( respUsuarios);
      }
    );

  }

  onSubmit( usuarioData:any ){
    this.checkoutForm.reset();
    console.warn('envio de formulario', usuarioData);
  }

}
