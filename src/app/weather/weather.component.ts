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
  isLoading: boolean=false;
  
  constructor( private weather: weatherService ) { }

  ngOnInit() {
    
  }

  getWeather(){
    this.isLoading=true;
    this.weather.getweather(this.txtcityName)
    .then(value => {this.temp=value;
                    this.cityName=this.txtcityName;
                    this.isLoading=false;
                    this.txtcityName='';
                  })
    .catch(err => {
      alert("Can not find your city name");
      this.isLoading=false;
      this.cityName='';
      this.txtcityName='';
    });
  }

  getMassage(){
    if(this.isLoading){
      return "Loading....";
    }
     return this.cityName===''? "Enter name City" : this.cityName + " nhiệt độ: "+ this.temp;
  }
}
