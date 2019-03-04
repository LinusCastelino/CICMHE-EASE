import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-facets',
  templateUrl: './facets.component.html',
  styleUrls: ['./facets.component.css']
})
export class FacetsComponent implements OnInit {

 
  @Input() filters:any;
  @Input() companyList:any;
  @Input() productCompanyList:any;
  

  constructor() { }

  ngOnInit() {
  }

}
