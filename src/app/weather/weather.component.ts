import { Component, OnInit } from '@angular/core';
import { weatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [weatherService]
})
export class WeatherComponent implements OnInit {
  txtcityName:string;
  cityName: string="";
  temp:number=null;  
  
  constructor( private weather: weatherService ) { }

  ngOnInit() {
    
  }

  getWeather(){
    
    this.weather.getweather(this.txtcityName)
    .then(value => {this.temp=value;
                    this.cityName=this.txtcityName;
                  })
    .catch(err => console.log(err));
  }

}
