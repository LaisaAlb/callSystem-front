import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Credenciais } from '../models/credenciais';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( 
    private http: HttpClient) { }

  authenticate(creds: Credenciais) {
    console.log('Autenticando com as credenciais:', creds); // Log para checar as credenciais
    // Corrigido o acesso a API_CONFIG.baseUrls
    return this.http.post('http://localhost:8080/login', creds, {
      observe: 'response', 
      responseType: 'text'
    }).pipe(
      tap(response => {
        console.log('Resposta da requisição:', response); // Log da resposta
      })
    );
  }
}
