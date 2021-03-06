import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.css']
})
export class SearchHistoryComponent implements OnInit {

  @Input() productList:any;
  @Input() resultProducts:any;
  @Output() productsEmitter : EventEmitter<any> = new EventEmitter<any>(); 
  
  constructor() { }

  ngOnInit() {
  }

  public clear() : void{
    this.resultProducts=[];
  }

  onProductListChange(event){
      console.log(event.length);
  this.productsEmitter.emit(this.resultProducts);
  }
}
