import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-stdadd',
  templateUrl: './stdadd.component.html',
  styleUrls: ['./stdadd.component.css']
})
export class StdaddComponent implements OnInit {
  saveresponse: any;
  
  constructor(private service: StudentService, private route: ActivatedRoute, private router:Router){
    
  }

  ngOnInit(): void {
  }
  

  studentform = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobile: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
  });

  SaveStudent() {
    if (this.studentform.valid) {
      // console.log(this.studentform.value);
      this.service.SaveStudent(this.studentform.value).subscribe(result => {
        this.saveresponse = result;
        console.log(this.saveresponse);
      });
      alert("Created Successfully");
      this.router.navigate(['/student'])
    }
  }
  get firstName(){
    return this.studentform.get('firstName');
  }
  get lastName(){
    return this.studentform.get('lastName');
  }
  get email(){
    return this.studentform.get('email');
  }
  get mobile(){
    return this.studentform.get('mobile');
  }
  get state(){
    return this.studentform.get('state');
  }
  get city(){
    return this.studentform.get('city');
  }
}
