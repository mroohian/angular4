import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {
  company: Company;

  constructor() { 
    this.company = {
      name: "Afsoun GmbH",
      address: "Muster-Str. 10, 86861 Musterstadt",
      tel: "+49-123-13254234",
      website: "www.afsoun.de"
    }

  }

  ngOnInit() { }

  companyInfoCompanyLabelClick(event) {
    console.log('companyInfoCompanyLabelClick', event);
  }
}

interface Company {
  name: string;
  address: string;
  tel: string;
  website: string;
}