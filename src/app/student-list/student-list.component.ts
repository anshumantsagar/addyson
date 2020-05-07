import { Component} from '@angular/core';

@Component({
    selector: 'studentlist',
    template: `
    <table class="table" *ngIf="studentlist.length !== 0">
        <thead class="thead-dark">
            <tr>
                <th scope="col">No.</th>
                <th scope="col">Name</th>
                <th scope="col">View</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
            </tr>
        </thead>
        <tbody>
            <tr *ngFor='let list of studentlist; let indexing="index"'>
                <th scope="row">{{indexing+1}}</th>
                <td>{{list.firstname+' '+list.lastname}}</td>
                <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" (click)="viewStudent(list,indexing)">View</button></td>
                <td><button type="button" class="btn btn-warning" data-toggle="modal" data-target="#myModal" (click)="viewStudent(list,indexing)">Edit</button></td>
                <td><button type="button" class="btn btn-danger" (click)="deleteStudent(indexing)">Delete</button></td>
            </tr>
        </tbody>
    </table>
    <div class="jumbotron">
    <!-- Trigger the modal with a button -->
    <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Add Student</button>

    <!-- Modal Student ADD/EDIT Form-->
    <div id="myModal" class="modal fade" role="dialog">
        <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Student Form</h4>
            </div>
    <div class="modal-body">
        <!--First Name-->
        <div class="form-group">
            <label for="exampleInputEmail1">First Name</label>
            <input type="text" class="form-control"  aria-describedby="emailHelp" placeholder="First Name" [(ngModel)]="studentData.firstname">
        </div>
        <div class="mbi-20" *ngIf="!studentData.firstname && validationFlag"  >
            <label style="color: red">Firstname is required</label>
        </div>
        <!--Last name-->
        <div class="form-group">
            <label for="exampleInputEmail1">Last Name</label>
            <input type="text" class="form-control"  aria-describedby="emailHelp" placeholder="Last Name" [(ngModel)]="studentData.lastname">
        </div>
        <div class="mbi-20" *ngIf="!studentData.lastname && validationFlag"  >
            <label style="color: red">Lastname is required</label>
        </div>
        <!--gender-->
        <div>
            <label>Gender</label>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {{studentData.gender}}
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" (click)="studentData.gender='Male'">Male</a>
                    <a class="dropdown-item" (click)="studentData.gender='Female'">Female</a>
                </div>
            </div>
        </div>
        <div class="mbi-20" *ngIf="!studentData.gender && validationFlag"  >
            <label style="color: red">Gender is required</label>
        </div>
        <label></label>
        <!--DOB-->
        <div class="form-group">
            <label for="exampleInputEmail1">Date Of Birth</label>
            <input type="text" class="form-control"  aria-describedby="emailHelp" placeholder="DD/MM/YYYY" [(ngModel)]="studentData.dob">
        </div>
        <div class="mbi-20" *ngIf="!studentData.dob && validationFlag"  >
            <label style="color: red">Date Of Birth is required</label>
        </div>
        <!--Address-->
        <div class="form-group">
            <label for="exampleInputEmail1">Address</label>
            <input type="text" class="form-control"  aria-describedby="emailHelp" placeholder="Address" [(ngModel)]="studentData.address">
        </div>
        <div class="mbi-20" *ngIf="!studentData.address && validationFlag"  >
            <label style="color: red">Address is required</label>
        </div>
        <!--Education(1)-->
        <div class="form-group">
            <label for="exampleInputEmail1" >Education</label><!--<button type="button" class="btn btn-primary" (click)="addEducationColumn()">+</button>-->
            <div class="row">
                <div class="col">
                    <input type="text" class="form-control" placeholder="Qualification" [(ngModel)]="studentData.education1.qualification">
                </div>
                <div class="col">
                    <input type="text" class="form-control" placeholder="University" [(ngModel)]="studentData.education1.university">
                </div>
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {{studentData.education1.passed}}
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" (click)="studentData.education1.passed='Passed'">Passed</a>
                        <a class="dropdown-item" (click)="studentData.education1.passed='Persusing'">Persusing</a>
                    </div>
                </div>
                <div class="col">
                    <input type="number" class="form-control" placeholder="score" min="0" max="100" [(ngModel)]="studentData.education1.score">
                </div>
            </div>
            <!--<button type="button" class="btn btn-danger" (click)="removeEducationColumn(indexing)">-</button>-->
        </div>
        <!--Education(2)-->
        <div class="form-group">
            <!--<label for="exampleInputEmail1" >Education</label><button type="button" class="btn btn-primary" (click)="addEducationColumn()">+</button>-->
            <div class="row">
                <div class="col">
                    <input type="text" class="form-control" placeholder="Qualification" [(ngModel)]="studentData.education2.qualification">
                </div>
                <div class="col">
                    <input type="text" class="form-control" placeholder="University" [(ngModel)]="studentData.education2.university">
                </div>
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {{studentData.education2.passed}}
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" (click)="studentData.education2.passed='Passed'">Passed</a>
                        <a class="dropdown-item" (click)="studentData.education2.passed='Persusing'">Persusing</a>
                    </div>
                </div>
                <div class="col">
                    <input type="number" class="form-control" placeholder="score" min="0" max="100" [(ngModel)]="studentData.education2.score">
                </div>
            </div>
            <!--<button type="button" class="btn btn-danger" (click)="removeEducationColumn(indexing)">-</button>-->
        </div>
        <!--Intrest-->
        <div>
            <label>Intrested Course</label>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {{studentData.intrestedcourse}}
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" (click)="studentData.intrestedcourse='Cloud Computing'">Cloud Computing</a>
                    <a class="dropdown-item" (click)="studentData.intrestedcourse='Big Data'">Big Data</a>
                    <a class="dropdown-item" (click)="studentData.intrestedcourse='Web Development'">Web Development</a>
                    <a class="dropdown-item" (click)="studentData.intrestedcourse='Machine Learning'">Machine Learning</a>
                </div>
            </div>
        </div>
        <div class="mbi-20" *ngIf="!studentData.intrestedcourse && validationFlag"  >
            <label style="color: red">Intrested Course is required</label>
        </div>
        </div>
        <div class="modal-footer">
        <!--Submit Button-->
            <div>
                <button type="submit" class="btn btn-primary" (click)="submitFormData()">Submit</button>
                </div>
                <button type="button" class="btn btn-default" data-dismiss="modal" (click)="cancel()">Close</button>
            </div>
        </div>
    </div>
    </div> 
    </div>
    
    <!--modal student view-->    
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Student Details</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <h3>Name:-<span class="badge badge-secondary">{{this.studentData.firstname}}</span></h3>
                    <h3>Lastname:-<span class="badge badge-secondary">{{this.studentData.lastname}}</span></h3>
                    <h3>Gender:-<span class="badge badge-secondary">{{this.studentData.gender}}</span></h3>
                    <h3>Date Of Birth:-<span class="badge badge-secondary">{{this.studentData.dob}}</span></h3>
                    <h3>Address:-<span class="badge badge-secondary">{{this.studentData.address}}</span></h3>
                    <h3>Education:-</h3>
                    <div>
                        <h5>Qualification:-<span class="badge badge-secondary">{{this.studentData.education1.qualification}}</span></h5>
                        <h5>University:-<span class="badge badge-secondary">{{this.studentData.education1.university}}</span></h5>
                        <h5>Passed/Persuing:-<span class="badge badge-secondary">{{this.studentData.education1.passed}}</span></h5>
                        <h5>Score:-<span class="badge badge-secondary">{{this.studentData.education1.score}}</span></h5>
                    </div>
                    <h3>Education:-</h3>
                    <div>
                        <h5>Qualification:-<span class="badge badge-secondary">{{this.studentData.education2.qualification}}</span></h5>
                        <h5>University:-<span class="badge badge-secondary">{{this.studentData.education2.university}}</span></h5>
                        <h5>Passed/Persuing:-<span class="badge badge-secondary">{{this.studentData.education2.passed}}</span></h5>
                        <h5>Score:-<span class="badge badge-secondary">{{this.studentData.education2.score}}</span></h5>
                    </div>               
                    <h3>Course Of Intrest:-<span class="badge badge-secondary">{{this.studentData.intrestedcourse}}</span></h3>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal" (click)="cancel()">Close</button>
                </div>
            </div>
        </div>
    </div>
    `
})

export class StudentlistComponent  {
    studentlist = []//for storing the student data
    dataForEdit:boolean = false; //for checking if the data is for editing
    editIndex:number //for getting the index while editing

    //add Student 
    studentData:any={
        firstname:'',
        lastname:'',
        gender:'',
        dob:'',
        address:'',
        education1:{
            qualification:'',
            university:'',
            passed:'',
            score:''
        },
        education2:{
            qualification:'',
            university:'',
            passed:'',
            score:''
        },
        intrestedcourse:''
    };
    validationFlag:boolean = false; //for enabling when to show validations

    constructor() {
        if(localStorage.studentlist){//for fetching data from local storage
            this.studentlist = JSON.parse(localStorage.studentlist)
        }
        
    }

    //delete student
    deleteStudent(index){
        this.studentlist.splice(index,1)
        localStorage.studentlist = JSON.stringify(this.studentlist)
    }

    //add/edit student
    submitFormData(){
        if(this.dataForEdit == true){
            this.validationFlag = true
            if(this.valitdation()){
                this.studentlist.splice(this.editIndex,1,this.studentData)
                this.studentData={
                    firstname:'',
                    lastname:'',
                    gender:'',
                    dob:'',
                    address:'',
                    education1:{
                        qualification:'',
                        univesity:'',
                        passed:'',
                        score:''
                    },
                    education2:{
                        qualification:'',
                        univesity:'',
                        passed:'',
                        score:''
                    },
                    intrestedcourse:''
                };
            this.validationFlag = false;
            localStorage.studentlist = JSON.stringify(this.studentlist)
            }
            this.dataForEdit = false
        } else {
            this.validationFlag = true
            if(this.valitdation()){
                this.studentlist.push(this.studentData)
                this.studentData={
                    firstname:'',
                    lastname:'',
                    gender:'',
                    dob:'',
                    address:'',
                    education1:{
                        qualification:'',
                        univesity:'',
                        passed:'',
                        score:''
                    },
                    education2:{
                        qualification:'',
                        univesity:'',
                        passed:'',
                        score:''
                    },
                    intrestedcourse:''
                };
            this.validationFlag = false;
            localStorage.studentlist = JSON.stringify(this.studentlist)
            }
        }
        
    }

    //validation
    valitdation(){
        if(this.studentData.firstname!=='' 
            && this.studentData.lastname!=='' 
            && this.studentData.gender!=='' 
            && this.studentData.dob!=='' 
            && this.studentData.address!=='' 
            && this.studentData.intrestedcourse!==''){
            return true;
        } else {
            return false;
        }
    }

    //for erasing the data from databinded json when close the modal
    cancel(){
        this.studentData={
            firstname:'',
            lastname:'',
            gender:'',
            dob:'',
            address:'',
            education1:{
                qualification:'',
                univesity:'',
                passed:'',
                score:''
            },
            education2:{
                qualification:'',
                univesity:'',
                passed:'',
                score:''
            },
            intrestedcourse:''
        };
        this.validationFlag = false;
    }

    //for viewing and editding data to put the data in data binded json
    viewStudent(currentStudentData,indexing){
        this.dataForEdit = true;
        this.editIndex = indexing
        this.studentData.firstname = currentStudentData.firstname
        this.studentData.lastname = currentStudentData.lastname
        this.studentData.gender = currentStudentData.gender
        this.studentData.dob = currentStudentData.dob
        this.studentData.address = currentStudentData.address
        this.studentData.education1.qualification = currentStudentData.education1.qualification
        this.studentData.education1.university = currentStudentData.education1.university
        this.studentData.education1.passed = currentStudentData.education1.passed
        this.studentData.education1.score = currentStudentData.education1.score
        this.studentData.education2.qualification = currentStudentData.education2.qualification
        this.studentData.education2.university = currentStudentData.education2.university
        this.studentData.education2.passed = currentStudentData.education2.passed
        this.studentData.education2.score = currentStudentData.education2.score
        this.studentData.intrestedcourse = currentStudentData.intrestedcourse
    }

}