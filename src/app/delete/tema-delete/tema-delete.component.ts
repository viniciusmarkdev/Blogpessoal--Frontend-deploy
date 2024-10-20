import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tema } from 'src/app/model/Tema';
import { AlertasService } from 'src/app/service/alertas.service';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-tema-delete',
  templateUrl: './tema-delete.component.html',
  styleUrls: ['./tema-delete.component.css']
})
export class TemaDeleteComponent implements OnInit {

  tema : Tema = new Tema()
  idTema: number  

  constructor(

  private temasService: TemaService,
  private router: Router,
  private route: ActivatedRoute,
  private alerta:AlertasService

    
  ) { }

  ngOnInit(): void {

    if(environment.token==''){
      this.router.navigate(['/entrar'])
    }

    this.idTema= this.route.snapshot.params['id']
    this.findByIdTema(this.idTema)

  }

  findByIdTema(id: number){
    this.temasService.getByIdTema(id).subscribe((resp: Tema) => {


      this.tema = resp


    })

  }

  apagar(){

    this.temasService.deleteTema(this.idTema).subscribe(()=>{

      this.alerta.showAlertSucess('Tema apagado com sucesso!')
      this.router.navigate(['/tema'])


    
  })


    }
  }