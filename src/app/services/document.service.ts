import { HttpClientModule ,HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private http : HttpClient) { }
  

  add(data: any){
    return this.http.post<any>('http://127.0.0.1:8000/documents',data);
  }
  get(){
    return  this.http.get<any[]>('http://127.0.0.1:8000/documents/all/');
  }
  getbyId(id :any){
    return this.http.get('http://127.0.0.1:8000/documents/' +id +'/download/', { responseType: 'blob' });
  }

}
