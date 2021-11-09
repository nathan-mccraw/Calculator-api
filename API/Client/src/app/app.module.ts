import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { OperatorButtonComponent } from './Calculator/operator-button/operator-button.component';
import { CalculatorScreenComponent } from './Calculator/calculator-screen/calculator-screen.component';
import { CalculatorBodyComponent } from './Calculator/calculator-body/calculator-body.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TableComponent } from './CalculationsHistory/table/table.component';

import { ModalComponent } from './AddUser/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'calculator', component: CalculatorBodyComponent },
  { path: '', redirectTo: '/calculator', pathMatch: 'full' },
  { path: 'CalculationsHistory', component: TableComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    OperatorButtonComponent,
    CalculatorScreenComponent,
    CalculatorBodyComponent,
    NavbarComponent,
    TableComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
