import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-angular-grids';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Data, Response } from './crud';



@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HttpClient) { }



  getAllData():Observable<Response>{
    return this.http.get<Response>('http://cmi-ofm.azurewebsites.net/api/Program').pipe(
      map((res) => {

        return res;
      })
    )
  }


addData(data: any) {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    formData.append(key, data[key]);
  });
  return this.http
    .post<any>('http://cmi-ofm.azurewebsites.net/api/program', formData )
    .pipe(
      map((res) => {


        return res;
      })
    );
}

updateData(data: any) {
  const formData = new FormData();

  Object.keys(data).forEach((key) => {
    formData.append(key, data[key]);
  });

  return this.http
    .put(`http://cmi-ofm.azurewebsites.net/api/program`, formData)
    .pipe(
      map((res) => {

        return res;
      })
    );
}





deactive(id: string): Observable<any> {

  return this.http.delete(
    `http://cmi-ofm.azurewebsites.net/api/Program/${id}`,

  ).pipe(map((res) => {

    return res;
  }));
}
active(id: string): Observable<any> {

  return this.http.put(
    `http://cmi-ofm.azurewebsites.net/api/Program/${id}/Activate`,
    id,

  ).pipe(map((res) => {

    return res;
  }));
}
}


