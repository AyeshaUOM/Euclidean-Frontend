import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from './app-config';
import { config } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    // attendance-------------------------------------------------------------
    getAttendance() {
        const attendance = this.http.get(new AppConfig().url('api/attendance'));
        return attendance;
    }
    getAttendanceByClass(classID: number,currentDate: string) {
        const attendance = this.http.get(new AppConfig().url('api/Attendance/getattendancebyclass/'+ classID+'/'+currentDate));
        return attendance;
    }
    markAttendance(isAvailable: string,studentID: number,classID: number,currentDate: string) {
        const attendance1 = this.http.get(new AppConfig().url('api/Attendance/markAttendance/'+isAvailable+'/'+studentID+'/'+ classID+'/'+currentDate));
        return attendance1;
    }
    // student------------------------------------------------------------------
    createStudent(data) {
        return this.http.post(new AppConfig().url('api/students/create'), data);
    }

    getStudent() {
        const student = this.http.get(new AppConfig().url('api/students'));
        return student;
    }

    getOneStudent(studentId: number) {
        return this.http.get(new AppConfig().url('api/students/get/' + studentId));
    }

    // Parent------------------------------------------------------------------------
    createParent(data) {
        return this.http.post(new AppConfig().url('api/parents/create'), data);
    }

    getParent(parentId: number) {
        return this.http.get(new AppConfig().url('api/parents/get/' + parentId));
    }

    getParents() {
        return this.http.get(new AppConfig().url('api/parents/get'));
    }

    // branches-----------------------------------------------------------------------
    saveBranch(data) {
        console.log(data);
        return this.http.post(new AppConfig().url('api/branches/create'), data);
    }

    getBranch(branchId: number) {
        return this.http.get(new AppConfig().url('api/branches/get/' + branchId));
    }

    getBranches() {
        return this.http.get(new AppConfig().url('api/branches/get'));
    }

    // Users------------------------------------------------------------------------
    saveUser(data) {
        return this.http.post(new AppConfig().url('api/users/create'), data);
    }

    getUser(userId: number) {
        return this.http.get(new AppConfig().url('api/users/get/' + userId));
    }

    getUsers() {
        return this.http.get(new AppConfig().url('api/users/get'));
    }

    //Packages------------------------------------------------------------------------------
    savePackage(data) {
        return this.http.post(new AppConfig().url('api/packages/create'), data);
    }

    getPackage(packageId: number) {
        return this.http.get(new AppConfig().url('api/packages/get/' + packageId));
    }

    getPackages() {
        return this.http.get(new AppConfig().url('api/packages/get'));
    }

    saveDefaultPayment(data) {
        return this.http.post(new AppConfig().url('api/DefaultPayments/create'), data);
    }

    getDefaultPayment() {
        return this.http.get(new AppConfig().url('api/DefaultPayments/get'));
    }

    //Classes--------------------------------------------------------------------------
    saveClass(data) {
        return this.http.post(new AppConfig().url('api/class/create'), data);
    }

    getClass(packageId: number) {
        return this.http.get(new AppConfig().url('api/class/get/' + packageId));
    }

    getClasses() {
        return this.http.get(new AppConfig().url('api/class/get'));
    }

    saveTournament(data) {
        return this.http.post(new AppConfig().url('api/Tournament/create'), data);
    }

    getTournaments() {
        return this.http.get(new AppConfig().url('api/Tournament'));
    }

    deleteTournament(Id: number) {
        return this.http.delete(new AppConfig().url('api/Tournament?id=' + Id));
    }

    registerPlayer(studentId:number, tournamentId:number) {
        return this.http.post(new AppConfig().url('api/RegisterPlayers/create?studentId='+studentId+'&tournamentId='+tournamentId), '');
    }

    savePuzzle(data) {
        return this.http.post(new AppConfig().url('api/Puzzle/create'), data);
    }

    getPuzzles() {
        return this.http.get(new AppConfig().url('api/Puzzle'));
    }

    deletePuzzle(Id: number) {
        return this.http.delete(new AppConfig().url('api/Puzzle?id=' + Id));
    }

    saveStudentPuzzle(data) {
        return this.http.post(new AppConfig().url('api/StudentPuzzle/create'), data);
    }

    getStudentPuzzle() {
        return this.http.get(new AppConfig().url('api/StudentPuzzle'));
    }

    deleteStudentPuzzle(Id: number) {
        return this.http.delete(new AppConfig().url('api/StudentPuzzle?id=' + Id));
    }
}
