import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  nome = environment.nome
  foto=environment.foto
  token=environment.token
  id = environment.id


  constructor(
    private router : Router,
    public auth: AuthService

  ) { }

  ngOnInit(): void {
  }

  sair(){

    this.router.navigate(['/entrar'])
    environment.nome=''
    environment.foto=''
    environment.token=''
    environment.id=0


  }

}
