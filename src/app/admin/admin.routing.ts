import { ArchivementComponent } from './archivement/archivement.component';

import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsListComponent } from './students/students-list/students-list.component';
import { CreateStudentComponent } from './students/create-student/create-student.component';
import { AttendanceComponent } from './students/attendance/attendance.component';
import { ParentsListComponent } from './parents/parents-list/parents-list.component';
import { CreateParentComponent } from './parents/create-parent/create-parent.component';
import { PaymentComponent } from './parents/payment/payment.component';
import { PackageListComponent } from './packages/package-list/package-list.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { BranchListComponent } from './branches/branch-list/branch-list.component';
import { EuClassesComponent } from 'app/eu-classes/eu-classes.component';
import { CreateTournamentComponent } from './tournament/create-tournament/create-tournament.component';
import { RegisterPlayersComponent } from './tournament/register-players/register-players.component';
import { InventoryComponent } from './inventory/inventory.component';
import { AttendanceReportComponent } from 'app/Reports/attendance-report/attendance-report.component';
import { IncomeExpenseReportComponent } from 'app/Reports/income-expense-report/income-expense-report.component';
import { PaymentReportComponent } from 'app/Reports/payment-report/payment-report.component';
import { InventoryReportComponent } from 'app/Reports/inventory-report/inventory-report.component';
import { PuzzleReportComponent } from 'app/Reports/puzzle-report/puzzle-report.component';
import { TouranmentReportComponent } from 'app/Reports/touranment-report/touranment-report.component';
import { TransactionReportComponent } from 'app/Reports/transaction-report/transaction-report.component';
import { NewPuzzleComponent } from './puzzle/new-puzzle/new-puzzle.component';
import { AssignPuzzleComponent } from './puzzle/assign-puzzle/assign-puzzle.component';


export const AdminRoutes: Routes = [
    {path: 'dashboard', component: DashboardComponent },  
    {path: 'student-list', component: StudentsListComponent},
    {path: 'create-student', component: CreateStudentComponent},
    {path: 'create-student/:id', component: CreateStudentComponent, data: {title: 'Update Student'}},
    {path: 'attendance', component: AttendanceComponent},
    {path: 'parents-list', component: ParentsListComponent},
    {path: 'create-parent', component: CreateParentComponent},
    {path: 'update-parent/:id', component: CreateParentComponent},
    {path: 'payment', component: PaymentComponent},
    {path: 'package-list', component: PackageListComponent},
    {path: 'user-profile', component: UserProfileComponent},
    {path: 'branch-list', component: BranchListComponent},
    {path: 'class-list', component:EuClassesComponent},
    {path: 'create-tournament', component: CreateTournamentComponent},
    {path: 'register-players', component: RegisterPlayersComponent},
    {path: 'inventory', component: InventoryComponent},
    {path: 'report-attendance', component: AttendanceReportComponent},
    {path: 'report-incomeExpense', component: IncomeExpenseReportComponent},
    {path: 'report-inventory', component: InventoryReportComponent},
    {path: 'report-payment', component: PaymentReportComponent},
    {path: 'report-puzzle', component: PuzzleReportComponent},
    {path: 'report-tournament', component: TouranmentReportComponent},
    {path: 'report-transaction', component: TransactionReportComponent},
    {path: 'archivement', component: ArchivementComponent},
    {path: 'new-puzzle', component: NewPuzzleComponent},
    {path: 'assign-puzzle', component: AssignPuzzleComponent},
    
];
