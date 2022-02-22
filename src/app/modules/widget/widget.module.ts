import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreComponent } from './components/score/score.component';
import { WidgetComponent } from './widget.component';

const components = [ScoreComponent, WidgetComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule],
  exports: [...components],
})
export class WidgetModule {}
