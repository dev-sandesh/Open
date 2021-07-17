import { Component, HostListener, OnInit } from '@angular/core';
import { Features } from '../interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  monthlyIncome: string = '0';
  monthlyExpense: string = '0';
  isSticky: boolean = false;
  months = [
    { id: 1, name: '6 months' },
    { id: 2, name: '12 months' },
    { id: 3, name: '18 months' },
    { id: 4, name: '24 months' },
  ];
  featuresData: Features[] = [
    {
      id: 1,
      title: 'Quick cash disbursement',
      icon: 'paid.png',
      content: 'Get terms loans that your business needs within 72 hrs',
    },
    {
      id: 2,
      title: 'Low-interest rate',
      icon: 'interest.png',
      content:
        'Achieve your financial goals with an amazing interest rate starting at 13% per annum',
    },
    {
      id: 3,
      title: 'Zero Paperwork',
      icon: 'paper.png',
      content:
        'Get started instantly by submitting only your basic details & bank statements',
    },
    {
      id: 4,
      title: 'Ace your business finances',
      icon: 'finance.png',
      content:
        'Manage banking, accounting & everything in between, on one platform',
    },
    {
      id: 5,
      title: 'Loans to fight COVID-19',
      icon: 'virus.png',
      content:
        'Zero EMI for first 3 months on Back-to-Business loans of upto 1 lakh',
    },
  ];
  constructor() {}
  ngOnInit() {}
  updateIncome(value: string, type: string) {
    if (type == 'income') this.monthlyIncome = value;
    else this.monthlyExpense = value;
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 40;
    console.log(this.isSticky);
  }
}
