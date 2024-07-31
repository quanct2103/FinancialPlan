import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-annual-report-details',
  templateUrl: './annual-report-details.component.html',
  styleUrl: './annual-report-details.component.scss'
})
export class AnnualReportDetailsComponent implements OnInit {
  year!: number;
  reportDetails: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.year = +params.get('year')!;
      this.loadReportDetails(this.year);
    });
  }
  loadReportDetails(year: number): void {
    this.reportDetails = {
      year: year,
      totalTerms: 12,
      totalExpense: 324656434,
      totalDepartment: 20,
      createdDate: '2022-12-20',
      departments: [
        { no: 1, department: 'BU2', totalExpense: 23456778, biggestExpenditure: 3456778, costType: 'Marketing' },
        { no: 2, department: 'BU3', totalExpense: 30456778, biggestExpenditure: 3456778, costType: 'Marketing' },
        { no: 3, department: 'BU4', totalExpense: 40213456, biggestExpenditure: 4213456, costType: 'Marketing' },
        { no: 4, department: 'BU5', totalExpense: 22456213, biggestExpenditure: 2456213, costType: 'Marketing' }
      ]
    };
  }
}
