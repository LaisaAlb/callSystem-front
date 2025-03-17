import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Chamado } from '../models/chamados'; 

@Injectable({
  providedIn: 'root'
})
export class ChamadoService {

  constructor(private http: HttpClient) { }

  findById(id: any): Observable<Chamado> {
    return this.http.get<Chamado>(`http://localhost:8080/chamados/${id}`);
  }

  findAll(): Observable<Chamado[]> {
    return this.http.get<Chamado[]>(`http://localhost:8080/chamados`);
  }

  create(chamado: Chamado): Observable<Chamado> {
    return this.http.post<Chamado>(`http://localhost:8080/chamados`, chamado);
  }

  update(chamado: Chamado): Observable<Chamado> {
    return this.http.put<Chamado>(`http://localhost:8080/chamados/${chamado.id}`, chamado);
  }
}