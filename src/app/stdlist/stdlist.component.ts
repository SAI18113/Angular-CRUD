import { Component, OnInit } from '@angular/core';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-stdlist',
  templateUrl: './stdlist.component.html',
  styleUrls: ['./stdlist.component.css']
})
export class StdlistComponent implements OnInit {
  studentdata: any;
  constructor(private service: StudentService) {
    this.LoadAll();
  }

  ngOnInit(): void {
  }
  LoadAll() {
    this.service.LoadAllStudent().subscribe(result => {
      this.studentdata = result;
    });
  }
  delete(id:any){
    if(confirm("Do you want to remove?")){
      this.service.RemoveStudentbyId(id).subscribe(result=>{
        this.LoadAll();
      })
    }
  }

}
