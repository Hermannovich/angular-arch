import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedLibsModule } from './shared-libs.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedLibsModule
  ],
  exports: [
    SharedLibsModule
  ],
})
export class SharedModule { }
