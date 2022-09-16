import { DadosService } from './dados.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DashboardComponent
  ],
  providers:[
    DadosService
  ]
})
export class DashboardModule { }
