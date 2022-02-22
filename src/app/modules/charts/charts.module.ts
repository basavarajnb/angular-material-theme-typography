import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { SolidGuageChartComponent } from './solid-guage-chart/solid-guage-chart.component';

@NgModule({
  declarations: [SolidGuageChartComponent],
  imports: [CommonModule, BrowserAnimationsModule],
  providers: [],
  exports: [SolidGuageChartComponent],
})
export class ChartsModule {}
