import { Component, OnInit } from '@angular/core';
import { BreweryService } from 'src/app/service/brewery.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

brewId: string = '';

brewery: any;

constructor(private brewServ:BreweryService){

}

  ngOnInit(): void {
    this.brewServ.getDetail(this.brewId).subscribe({
      next: data => {this.brewery = data},
      error: err => console.log(err)
  })}

}
