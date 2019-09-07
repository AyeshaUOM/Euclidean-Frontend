import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../../services/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { forEach } from '@angular/router/src/utils/collection';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register-players',
  templateUrl: './register-players.component.html',
  styleUrls: ['./register-players.component.scss']
})
export class RegisterPlayersComponent implements OnInit {

  constructor(private apiService: ApiService, private toastr: ToastrService) { }

  tournaments : any = [];
  parents : any = [];
  selectedValue: string;
  tournament : number;
  selectedParent : any;
  selectedParentDetails  : any;
  selectedStudents : any = [];
  parentId : any;
  test: string = 'test';

  ngOnInit() {
    this.loadTournaments();
    this.loadParents();
  }

  student = new FormGroup({
    id: new FormControl(0),
    indexNumber: new FormControl("", Validators.required),
    admissionDate: new FormControl(
        new Date().toLocaleDateString(),
        Validators.required
    ),
    admissionFee: new FormControl(0, Validators.required),
    firstName: new FormControl("", Validators.required),
    secondName: new FormControl("", Validators.required),
    lastName: new FormControl("", Validators.required),
    dob: new FormControl(
        new Date().toLocaleDateString(),
        Validators.required
    ),
    studentType : new FormControl("external"),
    parentId : new FormControl(0)
});

parent = new FormGroup({
  id : new FormControl(0, Validators.required),

  fatherName : new FormControl(),
  fatherOccupation: new FormControl(),
  fatherOfficeAddress: new FormControl(),
  fatherMobileNumber: new FormControl('', [Validators.pattern("^[0-9]*$")]),

  motherName: new FormControl(),
  motherOccupation: new FormControl(),
  motherOfficeAddress: new FormControl(),
  motherMobileNumber: new FormControl('', [Validators.pattern("^[0-9]*$")]),

  addressLine1: new FormControl('', Validators.required),
  addressLine2: new FormControl(),
  addressLine3: new FormControl(),
  landLineNumber: new FormControl(),
  smsAlertNumber: new FormControl(),
  parentType: new FormControl("external")
});

  loadTournaments(){
    this.apiService.getTournaments().subscribe(result => {
      this.tournaments=result;
    })
  }

  loadParents(){
    this.apiService.getParents().subscribe(result => {
      this.parents=result;
    })
  }

  loadParent(){
    this.selectedParentDetails=this.parents.filter(p=>p.id==this.selectedParent);
  }

  selectStudent(event,id:number){
    if ( event.target.checked ) {
      this.selectedStudents.push(id);
    }
   else{
    const index: number = this.selectedStudents.indexOf(id);
    if (index !== -1) {
        this.selectedStudents.splice(index, 1);
    }
   }
  }
  

   savePlayer(){

  if(this.selectedValue==='internal')
      {
        this.selectedStudents.forEach(element=>{
              this.apiService.registerPlayer(element, this.tournament).subscribe(result=>{
                  window.location.reload();
                })
            })
      }
   else{
         if (this.parent.valid && this.student.valid)
              console.log(this.parent)
              console.log(this.student)
            {
              this.saveParent().then(res => this.saveStudent());
            }
        }  
      }

      saveParent() {
        return new Promise((resolve, reject) => {
          console.log("saveParent")
          this.apiService.createParent(this.parent.value).subscribe( result => {
          this.toastr.success("Parent Registered!");
          this.parentId = result;
          console.log(result)
          }, 
          (error) => {
          this.toastr.error("Error Occured in Registering Parent");
          })
            resolve();
        });
    }


      saveStudent(){
        console.log("saveStudent")
        this.student.value['parentId'] = 14;
        console.log(this.student.value['parentId'])
        this.apiService.createStudent(this.student.value).subscribe((result) => {
        this.toastr.success("Student Registered!");
        console.log(result)
        this.student.reset;
        },
        (error) => {
        this.toastr.error("Error Occured in Registering Student");
        })
      }
    }

  