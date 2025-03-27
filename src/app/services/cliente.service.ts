import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  findById(id: any): Observable<Cliente>{
    return this.http.get<Cliente>(`http://localhost:8080/clientes/${id}`);

  }

  findAll(): Observable<Cliente[]>{
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    return this.http.get<Cliente[]>('http://localhost:8080/clientes', {headers}) 
  }

  create(cliente: Cliente): Observable<Cliente>{
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    return this.http.post<Cliente>('http://localhost:8080/clientes', headers);
  }

  update(cliente: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(`http://localhost:8080/clientes/${cliente.id}`, cliente);
  }

  delete(id: any): Observable<Cliente>{
    return this.http.delete<Cliente>(`http://localhost:8080/clientes/${id}`)
  }
}
