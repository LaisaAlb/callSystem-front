import { HttpClient } from '@angular/common/http';
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
    return this.http.get<Tecnico[]>('http://localhost:8080/tecnicos') 
  }

  create(tecnico: Tecnico): Observable<Tecnico>{
    return this.http.post<Tecnico>('http://localhost:8080/tecnicos', tecnico);
  }

  update(tecnico: Tecnico): Observable<Tecnico>{
    return this.http.put<Tecnico>(`http://localhost:8080/tecnicos/${tecnico.id}`, tecnico);
  }

}
