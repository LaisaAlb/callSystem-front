import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Credenciais } from '../models/credenciais';
import { tap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtService: JwtHelperService = new JwtHelperService(); 

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

  successfullLogin(authToken: string){
    localStorage.setItem('token', authToken);
  }

  isAuthenticated(){
    let token = localStorage.getItem('token');
    if(token != null){
      return !this.jwtService.isTokenExpired(token); 
    }
    return false; 
  }

  logout(){
    localStorage.clear();
  }

}
