import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  EditData: any;
  studentid: any;
  saveresponse:any;

  constructor(private service: StudentService, private route: ActivatedRoute, private router: Router) {
    this.studentid = this.route.snapshot.paramMap.get('id');
    if (this.studentid != null && this.studentid != 0) {
      this.getStudent(this.studentid);
    }
  }
  getStudent(id: any) {
    this.service.StudentbyId(id).subscribe(result => {
      this.EditData = result;
      if (this.EditData != null) {
        this.studentForm = new FormGroup({
          id: new FormControl(this.EditData.id),
          firstName: new FormControl(this.EditData.firstName),
          lastName: new FormControl(this.EditData.lastName),
          email: new FormControl(this.EditData.email),
          mobile: new FormControl(this.EditData.mobile),
          state: new FormControl(this.EditData.state),
          city: new FormControl(this.EditData.city),
        })
      }
    });

  }
  ngOnInit() {

  }
  studentForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobile: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
  });
  SaveStudent() {
    if (this.studentForm.valid) {
      // console.log(this.studentform.value);
      this.service.UpdateStudent(this.studentForm.value,this.studentid).subscribe(result => {
        this.saveresponse = result;
        console.log(this.saveresponse);
      });
      alert("Updated Successfully");
      this.router.navigate(['/student'])
    }
  }
  get firstName() {
    return this.studentForm.get('firstName');
  }
  get lastName() {
    return this.studentForm.get('lastName');
  }
  get email() {
    return this.studentForm.get('email');
  }
  get mobile() {
    return this.studentForm.get('mobile');
  }
  get state() {
    return this.studentForm.get('state');
  }
  get city() {
    return this.studentForm.get('city');
  }
}
