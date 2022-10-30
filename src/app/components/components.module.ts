import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { InfoComponent } from './info/info.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    InfoComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    HeaderComponent,
    InfoComponent,
    FormComponent
  ]
})
export class ComponentsModule { }
