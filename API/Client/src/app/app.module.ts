import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { OperatorButtonComponent } from './Calculator/operator-button/operator-button.component';
import { CalculatorScreenComponent } from './Calculator/calculator-screen/calculator-screen.component';
import { CalculatorBodyComponent } from './Calculator/calculator-body/calculator-body.component';

@NgModule({
  declarations: [
    AppComponent,
    OperatorButtonComponent,
    CalculatorScreenComponent,
    CalculatorBodyComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
