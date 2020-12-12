import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from './home-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  color:string;
  position: number;

  constructor( public service: HomeServiceService) { }

  ngOnInit(): void {
    this.getColor();
    this.position = 0;
  }

  // Get the ex from the api to change the css dynamically
  getColor(){
    this.service.getNewColor().subscribe((data) =>{
      // if(data.success === true){
        console.log(data);
        console.log('ex Value : ', '#' + data.new_color);
        this.color = '#' + data.new_color;
      // }
    })
  }

  // Incremente the variable number to change the class dynamically
  changePosition(){
    if(this.position < 3){
      this.position++;
    }else{
      this.position = 0;
    }
  }

}
