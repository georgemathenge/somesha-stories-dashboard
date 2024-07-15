import { NgModule } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({ declarations: [
        DashboardComponent,
        UserProfileComponent,
        TablesComponent,
    ], 
    imports: [
        MatTableModule,
         MatPaginatorModule,
        MatDialogModule,
          RouterModule.forChild(AdminLayoutRoutes),
    ],
         providers: [provideHttpClient(withInterceptorsFromDi())] })

export class AdminLayoutModule {}
