import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { InfoComponent } from './info/info.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ResultComponent } from './result/result.component';
import { ErrorComponent } from './error/error.component';



@NgModule({
  declarations: [
    HeaderComponent,
    InfoComponent,
    FormComponent,
    ResultComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    HeaderComponent,
    InfoComponent,
    FormComponent,
    ResultComponent
  ]
})
export class ComponentsModule { }
