import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-annual-report',
  templateUrl: './annual-report.component.html',
  styleUrl: './annual-report.component.scss'
})
export class AnnualReportComponent implements OnInit {
  reports = [
    { id: 1, year: 2022, totalExpense: 213456778, totalDepartment: 20, createdDate: new Date('2023-01-05') },
    { id: 2, year: 2021, totalExpense: 213456778, totalDepartment: 15, createdDate: new Date('2022-01-05') },
    { id: 3, year: 2020, totalExpense: 213456778, totalDepartment: 12, createdDate: new Date('2021-01-05') },
    { id: 4, year: 2019, totalExpense: 213456778, totalDepartment: 11, createdDate: new Date('2020-01-05') }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  viewDetails(id: number): void {
    this.router.navigate(['/annual-report-details', { year: id }]);
  }
}