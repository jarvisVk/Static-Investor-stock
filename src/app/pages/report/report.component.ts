import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import * as Feather from 'feather-icons';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  constructor() { }

  chart: any;

  ngOnInit() {

    Feather.replace();

    // Amonut Investest

    this.chart = new Chart('gold', {
      type: 'doughnut',
      data: {
        labels: ['Gold', 'Balance'],
        datasets: [
          {
            data: [65, 45],
            backgroundColor: ['rgba(116, 62, 226, 0.8)'],
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

    this.chart = new Chart('goldcv', {
      type: 'line',
      data: {
        labels: ['Sep 2019', 'Oct 2019', 'Nov 2019', 'Dec 2019', 'Jan 2020'],
        datasets: [
          {
            label: 'Gold',
            backgroundColor: 'rgba(144, 101, 232, 0.3)',
            borderColor: 'rgba(144, 101, 232, 1)',
            pointBackgroundColor: 'rgba(144, 101, 232, 0.1)',
            pointBorderColor: 'rgba(144, 101, 232, 1)',
            pointHoverBackgroundColor: 'rgba(144, 101, 232, 1)',
            pointHoverBorderColor: 'rgba(144, 101, 232, 1)',
            data: [70, 65, 72, 76, 78],
          },

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

    this.chart = new Chart('gloss', {
      type: 'line',
      data: {
        labels: ['Sep 2019', 'Oct 2019', 'Nov 2019', 'Dec 2019', 'Jan 2020'],
        datasets: [
          {
            label: 'Gold',
            backgroundColor: 'rgba(144, 101, 232, 0.3)',
            borderColor: 'rgba(144, 101, 232, 1)',
            pointBackgroundColor: 'rgba(144, 101, 232, 0.1)',
            pointBorderColor: 'rgba(144, 101, 232, 1)',
            pointHoverBackgroundColor: 'rgba(144, 101, 232, 1)',
            pointHoverBorderColor: 'rgba(144, 101, 232, 1)',
            data: [70, 55, 35, 66, 50],
          },
        ]
      },
      options: {
        legend: {
          display: false,
          position: 'bottom'
        },
        tooltips: {
          enabled: true
        }
      }
    });


    // Gain
    this.chart = new Chart('ggain', {
      type: 'line',
      data: {
        labels: ['Sep 2019', 'Oct 2019', 'Nov 2019', 'Dec 2019', 'Jan 2020'],
        datasets: [
          {
            backgroundColor: 'rgba(144, 101, 232, 0.3)',
            borderColor: 'rgba(144, 101, 232, 1)',
            pointBackgroundColor: 'rgba(144, 101, 232, 0.1)',
            pointBorderColor: 'rgba(144, 101, 232, 1)',
            pointHoverBackgroundColor: 'rgba(144, 101, 232, 1)',
            pointHoverBorderColor: 'rgba(144, 101, 232, 1)',
            data: [70, 55, 75, 66, 80],
          },

        ]
      },
      options: {
        legend: {
          display: false
        },
        tooltips: {
          enabled: true
        }
      }
    });

    // Stock Report
    // Amonut Investest

    this.chart = new Chart('sgold', {
      type: 'doughnut',
      data: {
        labels: ['Stocks', 'Balance'],
        datasets: [
          {
            data: [65, 45],
            backgroundColor: ['rgba(255, 51, 51, 0.8)'],
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

    this.chart = new Chart('scvgold', {
      type: 'line',
      data: {
        labels: ['Sep 2019', 'Oct 2019', 'Nov 2019', 'Dec 2019', 'Jan 2020'],
        datasets: [
          {
            label: 'Stocks',
            backgroundColor: 'rgba(255, 51, 51, 0.3)',
            borderColor: 'rgba(255, 51, 51, 1)',
            pointBackgroundColor: 'rgba(255, 51, 51, 1)',
            pointBorderColor: 'rgba(255, 51, 51, 1)',
            pointHoverBackgroundColor: 'rgba(255, 51, 51, 1)',
            pointHoverBorderColor: 'rgba(255, 51, 51, 1)',
            data: [50, 65, 72, 76, 78],
          },

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

    this.chart = new Chart('sloss', {
      type: 'line',
      data: {
        labels: ['Sep 2019', 'Oct 2019', 'Nov 2019', 'Dec 2019', 'Jan 2020'],
        datasets: [
          {
            label: 'Stocks',
            backgroundColor: 'rgba(255, 51, 51, 0.3)',
            borderColor: 'rgba(255, 51, 51, 1)',
            pointBackgroundColor: 'rgba(255, 51, 51, 1)',
            pointBorderColor: 'rgba(255, 51, 51, 1)',
            pointHoverBackgroundColor: 'rgba(255, 51, 51, 1)',
            pointHoverBorderColor: 'rgba(255, 51, 51, 1)',
            data: [30, 75, 95, 86, 80],
          },
        ]
      },
      options: {
        legend: {
          display: false,
          position: 'bottom'
        },
        tooltips: {
          enabled: true
        }
      }
    });

    // Gain
    this.chart = new Chart('sgain', {
      type: 'line',
      data: {
        labels: ['Sep 2019', 'Oct 2019', 'Nov 2019', 'Dec 2019', 'Jan 2020'],
        datasets: [
          {
            label: 'Stocks',
            backgroundColor: 'rgba(255, 51, 51, 0.3)',
            borderColor: 'rgba(255, 51, 51, 1)',
            pointBackgroundColor: 'rgba(255, 51, 51, 1)',
            pointBorderColor: 'rgba(255, 51, 51, 1)',
            pointHoverBackgroundColor: 'rgba(255, 51, 51, 1)',
            pointHoverBorderColor: 'rgba(255, 51, 51, 1)',
            data: [40, 55, 75, 65, 90],
          },

        ]
      },
      options: {
        legend: {
          display: false
        },
        tooltips: {
          enabled: true
        }
      }
    });


  }

}
