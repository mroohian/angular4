import { Component, ViewChild, OnInit } from '@angular/core';
import { CompanyInfoComponent } from '../company-info/company-info.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  company: Company;

  @ViewChild('mainCompanyInfo') companyInfo: CompanyInfoComponent;

  constructor() {
    this.company = {
      name: 'Muster GmbH',
      address: 'Muster-Str. 10, 86861 Musterstadt',
      tel: '+49-123-13254234',
      website: 'www.muster.de'
    };
  }

  ngOnInit() { }

  companyInfoCompanyLabelClick(event) {
    console.log('companyInfoCompanyLabelClick', this.companyInfo, event);
  }
}

interface Company {
  name: string;
  address: string;
  tel: string;
  website: string;
}
