import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeuFormComponent } from './meu-form.component';
import { FormsModule } from '@angular/forms';
import { InputPropertyComponent } from '../input-property/input-property.component';



@NgModule({
  declarations: [
    MeuFormComponent,
    InputPropertyComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MeuFormComponent,
    InputPropertyComponent
  ]
})
export class MeuFormModule { }
