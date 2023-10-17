import { Component, OnInit } from '@angular/core';
import { Comuna } from '../../interfaces/comuna';
import { HomeService } from '../../services/home.service';
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Usuario } from '../../interfaces/usuario.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  comunas: Comuna[] = [];
  // selectedValue: string = "";
  usuarioForm!: FormGroup;
  nuevoUsuario: Usuario;

  constructor(
    private homeService: HomeService,
    private formBuilder: FormBuilder
  ){
    this.usuarioForm = new FormGroup({
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
    console.log('nombre: ' + this.usuarioForm.controls['nombre'].value);
    this.homeService.getUsuarios().subscribe(
      respUsuarios => {
        console.log( respUsuarios);
      }
    );

  }


  public guardarUsuario(){
    console.warn('envio guardar nuevo usuario...');
    this.nuevoUsuario = {
      nombre: this.usuarioForm.controls['nombre'].value,
      apellido : this.usuarioForm.controls['apellido'].value,
      telefono : this.usuarioForm.controls['telefono'].value,
      codComuna: this.usuarioForm.controls['comunaCode'].value
    }

    this.homeService.saveUsuario(this.nuevoUsuario).subscribe( nuevoUsuario => {
      console.log('nuevo usuario guardado:', nuevoUsuario);
    })


  }

  onSubmit( usuarioData:any ){
    console.warn(usuarioData);
    this.usuarioForm.reset();

  }

}
