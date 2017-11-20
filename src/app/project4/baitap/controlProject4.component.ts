import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component ({
    selector: "app-controlProject4",
    templateUrl: "./controlProject4.component.html"
})

export class controlProject4Component {
    valueSummary: string[]=["small","medium","full"];   //khai báo các giá trị ban đầu cho summary
    valueCurrency: string[]= ["usd","vnd","cen"];


  @Input("typeSummary") mtypeSummary: number;
  @Input("typeCurrency") mtypeCurrency: string;

  @Output("typeSummaryChange") typeSummaryChange = new EventEmitter<number>(); 
  setttingSummary(value:any){
      this.typeSummaryChange.emit(value);
      //console.log(value);
  }

  @Output("typeCurencyChange") typeCurencyChange =new EventEmitter<string>();
  settingCurrency(value: any){
    this.typeCurencyChange.emit(value);
    //console.log(value);
  }
}