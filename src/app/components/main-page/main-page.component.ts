import { Component, OnInit } from '@angular/core';
import { BreweryService } from 'src/app/service/brewery.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit{
  breweries: any[] = [];

  constructor(public brewServ: BreweryService)  {

  }

ngOnInit(): void {
  this.brewServ.getBreweries().subscribe({
    next: data => {this.breweries = data},
    error: err => console.log(err)



  })
}

}

