import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
];

export const StudentROUTES: RouteInfo[] = [
    { path: '/create-student', title: 'New Student',  icon: 'dashboard', class: '' },
    { path: '/student-list', title: 'Students List',  icon: 'dashboard', class: '' },
    { path: '/attendance', title: 'Attendance',  icon: 'dashboard', class: '' },
    { path: '/archivement', title: 'Archivements',  icon: 'dashboard', class: '' },
    { path: '/assign-puzzle', title: 'Assign Puzzle',  icon: 'dashboard', class: '' },
];

export const ParentROUTES: RouteInfo[] = [
    { path: '/create-parent', title: 'New Parent',  icon: 'dashboard', class: '' },
    { path: '/parents-list', title: 'Parents List',  icon: 'dashboard', class: '' },
    { path: '/payment', title: 'Payment',  icon: 'dashboard', class: '' },
];

export const AdminROUTES: RouteInfo[] = [
    { path: '/package-list', title: 'Packages',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'Users',  icon: 'dashboard', class: '' },
    { path: '/branch-list', title: 'Branches',  icon: 'dashboard', class: '' },
    { path: '/class-list', title: 'Classes',  icon: 'dashboard', class: '' },
    { path: '/inventory', title: 'Inventory',  icon: 'dashboard', class: '' },
    { path: '/new-puzzle', title: 'New Puzzle',  icon: 'dashboard', class: '' }
];

export const TournamentROUTES: RouteInfo[] = [
    { path: '/create-tournament', title: 'New Tournament',  icon: 'dashboard', class: '' },
    { path: '/register-players', title: 'Register Players',  icon: 'dashboard', class: '' }
];


export const ReportROUTES: RouteInfo[] = [
    { path: '/report-attendance', title: 'Attendance',  icon: 'dashboard', class: '' },
    { path: '/report-incomeExpense', title: 'Income Expenses',  icon: 'dashboard', class: '' },
    { path: '/report-inventory', title: 'Inventory',  icon: 'dashboard', class: '' },
    { path: '/report-payment', title: 'Payment',  icon: 'dashboard', class: '' },
    { path: '/report-puzzle', title: 'Puzzle',  icon: 'dashboard', class: '' },
    { path: '/report-tournament', title: 'Tournament',  icon: 'dashboard', class: '' },
    { path: '/report-transaction', title: 'Transaction',  icon: 'dashboard', class: '' }
];
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  studentMenuItems: any[];
  adminMenuItems: any[];
  parentMenuItems: any[];
  tournamentMenuItems: any[];
  reportMenuItems: any[];
  

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.studentMenuItems = StudentROUTES.filter(menuItem => menuItem);
    this.adminMenuItems = AdminROUTES.filter(menuItem => menuItem);
    this.parentMenuItems = ParentROUTES.filter(menuItem => menuItem);
    this.tournamentMenuItems = TournamentROUTES.filter(menuItem => menuItem);
    this.reportMenuItems = ReportROUTES.filter(menuItem => menuItem);
  }
  
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
