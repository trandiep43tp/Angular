import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()

export class weatherService {
    constructor( private http: Http){}
    
    getweather(cityName: string){
        const url1 = 'http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=' + cityName;
      // const url  ='http://api.openweathermap.org/data/2.5/weather?appid=b2a28b6e226d5ed6634a11d7ef58a283&units=metric&q='+cityName;
       return this.http.get(url1)
                .toPromise()
                .then(res => res.json())
                .then(resJson => resJson.main.temp);
                
    }

}