import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as Feather from 'feather-icons';  
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

chart: any;

ngOnInit() {
  Feather.replace();

  this.chart = new Chart('canvas', {
    type: 'doughnut',
    data: {
      labels: ['Gold', 'Stocks', 'Insurance', 'Mutual funds'],
      datasets: [
        {
          data: [25, 25, 25 , 25],
          backgroundColor: ['rgba(116, 62, 226, 0.8)', 'rgba(255, 0, 0, 0.8)', 'rgba(255, 160, 10, 0.8)', 'rgba(111, 196, 30, 0.8)'],
          fill: false
        },
      ]
    },
    options: {
      legend: {
        display: true,
        position: 'bottom'
      },
      tooltips: {
        enabled: true
      }
    }
  });

  // Current Value

  this.chart = new Chart('chart', {
    type: 'bar',
    data: {
      labels: ['Gold', 'Stocks', 'Insurance', 'Mutual funds'],
      label: ['Gold', 'Stocks', 'Insurance', 'Mutual funds'],
      datasets: [
        {
          data: [64, 33 , 45, 66],
          backgroundColor: [
            'rgba(144, 101, 232, 0.7)',
            'rgba(255, 51, 51, 0.7)',
            'rgba(255, 179, 59, 0.7)',
            'rgba(140, 208, 75, 0.7)'
          ],
          borderColor: [
            'rgba(144, 101, 232, 1)',
            'rgba(255, 51, 51, 1)',
            'rgba(255, 179, 59, 1)',
            'rgba(140, 208, 75, 1)'
        ],
        borderWidth: 1
        }

      ]
    },
    options: {
      legend: {
        display: false,
      },
      tooltips: {
        enabled: true
      }
    }
  });

  // loss

  this.chart = new Chart('loss', {
    type: 'line',
    data: {
      labels: ['Sep 2019', 'Oct 2019', 'Nov 2019', 'Dec 2019', 'Jan 2020'],
      datasets: [
        {
          label: 'Gold',
          backgroundColor:  'rgba(144, 101, 232, 0.3)',
          borderColor:  'rgba(144, 101, 232, 1)',
          pointBackgroundColor:  'rgba(144, 101, 232, 0.1)',
          pointBorderColor: 'rgba(144, 101, 232, 1)',
          pointHoverBackgroundColor: 'rgba(144, 101, 232, 1)',
          pointHoverBorderColor: 'rgba(144, 101, 232, 1)',
          data: [70, 55 , 35, 66, 50],
        },
        {
          label: 'Stocks',
          backgroundColor: 'rgba(255, 51, 51, 0.3)',
          borderColor: 'rgba(255, 51, 51, 1)',
          pointBackgroundColor: 'rgba(255, 51, 51, 1)',
          pointBorderColor: 'rgba(255, 51, 51, 1)',
          pointHoverBackgroundColor: 'rgba(255, 51, 51, 1)',
          pointHoverBorderColor: 'rgba(255, 51, 51, 1)',
          data: [20, 53 , 95, 66, 62],
        },
        {
          label: 'Insurance',
          backgroundColor: 'rgba(255, 179, 59, 0.3)',
          borderColor: 'rgba(255, 179, 59, 1)',
          pointBackgroundColor: 'rgba(255, 179, 59, 1)',
          pointBorderColor: 'rgba(255, 179, 59, 1)',
          pointHoverBackgroundColor: 'rgba(255, 179, 59,1)',
          pointHoverBorderColor: 'rgba(255, 179, 59, 1)',
          data: [4, 70 , 78, 84, 84],
        },
        {
          label: 'Mutual funds',
          backgroundColor: 'rgba(140, 208, 75, 0.3)',
          borderColor: 'rgba(140, 208, 75, 1)',
          pointBackgroundColor: 'rgba(140, 208, 75, 1)',
          pointBorderColor: 'rgba(140, 208, 75, 1)',
          pointHoverBackgroundColor: 'rgba(140, 208, 75, 1)',
          pointHoverBorderColor: 'rgba(140, 208, 75, 1)',
          data: [40, 63 , 85, 70, 68],
        }
      ]
    },
    options: {
      legend: {
        display: true,
        position: 'bottom'
      },
      tooltips: {
        enabled: true
      }
    }
  });


  // Gain
  this.chart = new Chart('gain', {
    type: 'line',
    data: {
      labels: ['Sep 2019', 'Oct 2019', 'Nov 2019', 'Dec 2019', 'Jan 2020'],
      datasets: [
        {
          label: 'Gold',
          backgroundColor:  'rgba(144, 101, 232, 0.3)',
          borderColor:  'rgba(144, 101, 232, 1)',
          pointBackgroundColor:  'rgba(144, 101, 232, 0.1)',
          pointBorderColor: 'rgba(144, 101, 232, 1)',
          pointHoverBackgroundColor: 'rgba(144, 101, 232, 1)',
          pointHoverBorderColor: 'rgba(144, 101, 232, 1)',
          data: [70, 55 , 35, 66, 40],
        },
        {
          label: 'Stocks',
          backgroundColor: 'rgba(255, 51, 51, 0.3)',
          borderColor: 'rgba(255, 51, 51, 1)',
          pointBackgroundColor: 'rgba(255, 51, 51, 1)',
          pointBorderColor: 'rgba(255, 51, 51, 1)',
          pointHoverBackgroundColor: 'rgba(255, 51, 51, 1)',
          pointHoverBorderColor: 'rgba(255, 51, 51, 1)',
          data: [20, 53 , 75, 66, 80],
        },
        {
          label: 'Insurance',
          backgroundColor: 'rgba(255, 179, 59, 0.3)',
          borderColor: 'rgba(255, 179, 59, 1)',
          pointBackgroundColor: 'rgba(255, 179, 59, 1)',
          pointBorderColor: 'rgba(255, 179, 59, 1)',
          pointHoverBackgroundColor: 'rgba(255, 179, 59,1)',
          pointHoverBorderColor: 'rgba(255, 179, 59, 1)',
          data: [4, 70 , 60, 84, 55],
        },
        {
          label: 'Mutual funds',
          backgroundColor: 'rgba(140, 208, 75, 0.3)',
          borderColor: 'rgba(140, 208, 75, 1)',
          pointBackgroundColor: 'rgba(140, 208, 75, 1)',
          pointBorderColor: 'rgba(140, 208, 75, 1)',
          pointHoverBackgroundColor: 'rgba(140, 208, 75, 1)',
          pointHoverBorderColor: 'rgba(140, 208, 75, 1)',
          data: [40, 63 , 89, 70, 99],
        }

      ]
    },
    options: {
      legend: {
        display: true,
        position: 'bottom',
        borderWidth: 1
      },
      tooltips: {
        enabled: true
      }
    }
  });


}

}


