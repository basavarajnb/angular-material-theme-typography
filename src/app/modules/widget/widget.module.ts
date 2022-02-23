import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreComponent } from './components/score/score.component';
import { WidgetComponent } from './widget.component';
import { CiaChartsModule } from '../charts/charts.module';

const components = [ScoreComponent, WidgetComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule,
    CiaChartsModule],
  exports: [...components],
})
export class WidgetModule {}
