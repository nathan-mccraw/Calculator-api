import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { OperatorButtonComponent } from './Calculator/operator-button/operator-button.component';
import { CalculatorScreenComponent } from './Calculator/calculator-screen/calculator-screen.component';
import { CalculatorBodyComponent } from './Calculator/calculator-body/calculator-body.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TableComponent } from './CalculationsHistory/table/table.component';
import { AddUserModalComponent } from './AddUser/addUserModal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HistoryPageComponent } from './CalculationsHistory/history-page.component';
import { SortFormComponent } from './CalculationsHistory/sortForm/sortForm.component';
const routes = [
    { path: 'calculator', component: CalculatorBodyComponent },
    { path: '', redirectTo: '/calculator', pathMatch: 'full' },
    { path: 'CalculationsHistory', component: HistoryPageComponent },
];
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            OperatorButtonComponent,
            CalculatorScreenComponent,
            CalculatorBodyComponent,
            NavbarComponent,
            TableComponent,
            AddUserModalComponent,
            HistoryPageComponent,
            SortFormComponent
        ],
        imports: [
            BrowserModule,
            HttpClientModule,
            FormsModule,
            ReactiveFormsModule,
            RouterModule.forRoot(routes),
            NgbModule,
        ],
        providers: [],
        bootstrap: [AppComponent],
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map