import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-investors-dashboard',
  templateUrl: './investors-dashboard.component.html',
  styleUrl: './investors-dashboard.component.css'
})
export class InvestorsDashboardComponent implements OnInit {
  constructor(private httpClient: HttpClient) {

  }

  ngOnInit(): void {
    this.httpClient.get("https://localhost:7163/api/investors/ping")
      .subscribe((result) => {
        console.log(result)
      });
  }
}
