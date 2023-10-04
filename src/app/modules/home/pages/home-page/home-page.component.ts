import { Component, OnInit } from '@angular/core';
import { Comuna } from '../../interfaces/comuna';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  comunas: Comuna[] = [];

  constructor( private homeService: HomeService ){

  }

  ngOnInit(): void {
    this.homeService.getComunas().subscribe(
      respComunas => {
        console.log(respComunas);
      }
    );
  }
}
