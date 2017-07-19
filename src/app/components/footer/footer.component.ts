import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  companyName = 'Muster GmbH';
  currentTime: Date;
  timeFormat: string;

  constructor() {
    this.toggleFormat();
    this.currentTime = new Date(Date.now());
    setInterval(() => {
      this.currentTime = new Date(Date.now());
    }, 1000);
  }

  toggleFormat() {
    if (this.timeFormat === 'medium') {
      this.timeFormat = 'mediumTime';
    } else {
      this.timeFormat = 'medium';
    }
  }

  ngOnInit() {
  }

}
