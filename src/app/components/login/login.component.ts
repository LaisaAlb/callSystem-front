import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Credenciais } from 'src/app/models/credenciais';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  cred: Credenciais = {
    email: '',
    senha: ''
  }

  email = new FormControl(null, [Validators.required, Validators.email]);
  senha = new FormControl(null, [Validators.required, Validators.minLength(3)]);

  constructor(
    private service: AuthService, 
    private toast: ToastrService) { }

  ngOnInit(): void {

  }

  logar(){
    this.service.authenticate(this.cred).subscribe(resposta => {
      this.toast.info(resposta.headers.get('Authorization'))
    })
  }

  validaCampos(){
    return !(this.email.valid && this.senha.valid);
  }
}
