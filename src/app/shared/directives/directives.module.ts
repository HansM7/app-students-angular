import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogsDirective } from './dialogs.directive';

@NgModule({
  declarations: [DialogsDirective],
  imports: [CommonModule],
  exports: [DialogsDirective],
})
export class DirectivesModule {}
