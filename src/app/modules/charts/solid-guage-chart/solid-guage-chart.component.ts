declare var require: any;
import { Component, OnInit } from '@angular/core';

import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';

const HighchartsMore = require('highcharts/highcharts-more.src');
HighchartsMore(Highcharts);
const HC_solid_gauge = require('highcharts/modules/solid-gauge.src');
HC_solid_gauge(Highcharts);

@Component({
  selector: 'app-solid-guage-chart',
  templateUrl: './solid-guage-chart.component.html',
  styleUrls: ['./solid-guage-chart.component.scss'],
})
export class SolidGuageChartComponent implements OnInit {
  public chart!: Chart;
  public gaugeOptions = {
    chart: {
      type: 'solidgauge',
      height: '200',
    },

    title: null,
    credits: {
      enabled: false,
    },

    pane: {
      center: ['50%', '85%'],
      size: '100%',
      startAngle: -90,
      endAngle: 90,
      background: {
        backgroundColor: '#999',
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
        [0.1, '#DF5353'], // red
        [0.5, '#DDDF0D'], // yellow
        [0.9, '#55BF3B'], // green
      ],
      lineWidth: 0,
      tickWidth: 0,
      minorTickInterval: null,
      tickAmount: 2,
      title: {
        y: -70,
        text: 'Credit score',
      },
      labels: {
        y: 16,
      },

      min: 100,
      max: 850,
    },

    plotOptions: {
      solidgauge: {
        dataLabels: {
          y: 0,
          borderWidth: 0,
          useHTML: true,
        },
      },
    },
    series: [
      {
        name: 'Credit score',
        data: [779],
        dataLabels: {
          format:
            '<div style="text-align:center">' +
            '<span style="font-size:25px">{y}</span><br/>' +
            '</div>',
        },
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {
    this.init();
  }

  public init() {
    this.chart = new Chart(this.gaugeOptions as any);
    // Highcharts.chart(
    //   'container-gauge',
    //   Highcharts.merge(this.gaugeOptions as any, {})
    // );
  }
}
