import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tecnico } from '../models/tecnico';

@Injectable({
  providedIn: 'root'
})
export class TecnicoService {

  constructor(private http: HttpClient) { }

  findById(id: any): Observable<Tecnico>{
    return this.http.get<Tecnico>(`http://localhost:8080/tecnicos/${id}`);

  }

  findAll(): Observable<Tecnico[]>{
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    return this.http.get<Tecnico[]>('http://localhost:8080/tecnicos', {headers}) 
  }

  create(tecnico: Tecnico): Observable<Tecnico>{
    return this.http.post<Tecnico>('http://localhost:8080/tecnicos', tecnico);
  }

  update(tecnico: Tecnico): Observable<Tecnico>{
    return this.http.put<Tecnico>(`http://localhost:8080/tecnicos/${tecnico.id}`, tecnico);
  }

  delete(id: any): Observable<Tecnico>{
    return this.http.delete<Tecnico>(`http://localhost:8080/tecnicos/${id}`)
  }

}
