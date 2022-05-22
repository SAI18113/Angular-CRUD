import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  apiurl = 'https://localhost:44379/Students'
  constructor(private http: HttpClient) { }
  LoadAllStudent() {
    return this.http.get(this.apiurl);
  }
  StudentbyId(id: any) {
    return this.http.get(this.apiurl + '/' + id);
  }
  RemoveStudentbyId(id: any) {
    return this.http.delete(this.apiurl + '/' + id);
  }
  SaveStudent(inputdata: any) {
    return this.http.post(this.apiurl, inputdata);

  }
  UpdateStudent(inputdata : any, id:any){
    return this.http.put(this.apiurl+'/'+id, inputdata);
  }
}
