

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { CustomDialogComponent } from './reusable/custom-dialog/custom-dialog.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({ declarations: [
        AppComponent,
        AdminLayoutComponent,
        AuthLayoutComponent,
        CustomDialogComponent
    ],
    bootstrap: [AppComponent], imports: [
        FormsModule,
        ComponentsModule,
        NgbModule,
        RouterModule,
        AppRoutingModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
