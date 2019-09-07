import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { DataViewModule } from 'primeng/dataview';
import { PaginatorModule } from 'primeng/paginator';
import { DropdownModule } from 'primeng/dropdown';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { ToastrModule } from 'ngx-toastr';
import { MatRadioModule } from '@angular/material/radio';
import {MatDialogModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import { MatTableModule } from '@angular/material';
import { MatTabsModule } from '@angular/material';

// Admin Components
import { BranchListComponent } from './branches/branch-list/branch-list.component';
import { CreateParentComponent } from './parents/create-parent/create-parent.component';
import { ParentsListComponent } from './parents/parents-list/parents-list.component';
import { CreateStudentComponent } from './students/create-student/create-student.component';
import { StudentsListComponent } from './students/students-list/students-list.component';
import { PackageListComponent } from './packages/package-list/package-list.component';
import { RouterModule } from '@angular/router';
import { AdminRoutes } from './admin.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AttendanceComponent } from './students/attendance/attendance.component';
import { PaymentComponent } from './parents/payment/payment.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppButtonComponent } from 'app/components/app-button/app-button.component';
import { EuClassesComponent } from 'app/eu-classes/eu-classes.component';
import { AuditTrailComponent } from './audit-trail/audit-trail.component';
import { InventoryComponent } from './inventory/inventory.component';
import { CreateTournamentComponent } from './tournament/create-tournament/create-tournament.component';
import { RegisterPlayersComponent } from './tournament/register-players/register-players.component';
import { AttendanceReportComponent } from 'app/Reports/attendance-report/attendance-report.component';
import { TouranmentReportComponent } from 'app/Reports/touranment-report/touranment-report.component';
import { TransactionReportComponent } from 'app/Reports/transaction-report/transaction-report.component';
import { PaymentReportComponent } from 'app/Reports/payment-report/payment-report.component';
import { PuzzleReportComponent } from 'app/Reports/puzzle-report/puzzle-report.component';
import { IncomeExpenseReportComponent } from 'app/Reports/income-expense-report/income-expense-report.component';
import { InventoryReportComponent } from 'app/Reports/inventory-report/inventory-report.component';
import { IncomeExpensesComponent } from 'app/AccountManagement/income-expenses/income-expenses.component';
import { AccountManagementComponent } from 'app/AccountManagement/account-management/account-management.component';
import { ArchivementComponent } from './archivement/archivement.component';
import { OpendialogComponent } from './opendialog/opendialog.component';
import { NewPuzzleComponent } from './puzzle/new-puzzle/new-puzzle.component';
import { AssignPuzzleComponent } from './puzzle/assign-puzzle/assign-puzzle.component';

@NgModule({
	declarations: [
		DashboardComponent,
		PaymentComponent,
		BranchListComponent,
		CreateParentComponent, ParentsListComponent,
		CreateStudentComponent, StudentsListComponent, AttendanceComponent,
		PackageListComponent,
		UserProfileComponent,
		EuClassesComponent,
		AppButtonComponent,
		AuditTrailComponent,
		InventoryComponent,
		AppButtonComponent,
		CreateTournamentComponent,
		RegisterPlayersComponent,
		AttendanceReportComponent, TouranmentReportComponent, TransactionReportComponent, PaymentReportComponent, PuzzleReportComponent, IncomeExpenseReportComponent, InventoryReportComponent,
		AccountManagementComponent,
		IncomeExpensesComponent,
		ArchivementComponent,
		OpendialogComponent,
		NewPuzzleComponent,
		AssignPuzzleComponent
	],
	entryComponents: [ OpendialogComponent ],
	imports: [
		RouterModule.forChild(AdminRoutes),
		CommonModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		DataViewModule,
		PaginatorModule,
		DropdownModule,
		PanelModule,
		DialogModule,
		TableModule,
		MatSelectModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatRadioModule,
		MatDialogModule,
		MatButtonModule,
		MatTableModule,
		MatTabsModule

	]
})
export class AdminModule { }
