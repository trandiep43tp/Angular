
import { Injectable } from "@angular/core";     //chú ý phải import vào
import { Http } from "@angular/http";
@Injectable()

export class ipService {
    
    constructor( private http: Http){}
    getIp(){
      return  this.http.get("http://ip.jsontest.com")
                .toPromise()
                .then(res =>res.json())
                .then(resJson => resJson.ip) // do resJson là một chuỗi Json, ta chỉ lấy địa chi ip
                .catch(err =>console.log(err))
    } 
}