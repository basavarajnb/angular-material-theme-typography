import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-solid-guage-chart',
  templateUrl: './solid-guage-chart.component.html',
  styleUrls: ['./solid-guage-chart.component.scss'],
})
export class SolidGuageChartComponent implements OnInit {
  public chart: Chart;
  public gaugeOptions = {
    chart: {
      type: 'solidgauge',
    },

    title: null,

    pane: {
      center: ['50%', '85%'],
      size: '140%',
      startAngle: -90,
      endAngle: 90,
      background: {
        backgroundColor: '#EEE',
        innerRadius: '60%',
        outerRadius: '100%',
        shape: 'arc',
      },
    },

    exporting: {
      enabled: false,
    },

    tooltip: {
      enabled: false,
    },

    // the value axis
    yAxis: {
      stops: [
        [0.1, '#55BF3B'], // green
        [0.5, '#DDDF0D'], // yellow
        [0.9, '#DF5353'], // red
      ],
      lineWidth: 0,
      tickWidth: 0,
      minorTickInterval: null,
      tickAmount: 2,
      title: {
        y: -70,
      },
      labels: {
        y: 16,
      },
    },

    plotOptions: {
      solidgauge: {
        dataLabels: {
          y: 5,
          borderWidth: 0,
          useHTML: true,
        },
      },
    },
  };

  constructor() {}

  ngOnInit(): void {
    this.init();
  }

  public init() {
    let chart = new Chart(this.gaugeOptions);
    chart.ref$.subscribe(console.log);
  }
}
