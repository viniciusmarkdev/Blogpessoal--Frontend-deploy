import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
import { Observable, TeardownLogic } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token={

    headers : new HttpHeaders().set('Authorization',environment.token)
  }

  getAllTema(): Observable<Tema[ ]>{
    return this.http.get<Tema[]>('https://blogpessoal-deploy.onrender.com/tema',this.token)

  }

  getByIdTema (id : number):Observable<Tema>{
    
    return this.http.get<Tema>(`https://blogpessoal-deploy.onrender.com/tema/${id}`,this.token)
    
  }

  getByDescricaoTema(descricao: string): Observable<Tema[]>{
    return this.http.get<Tema[]>(`https://blogpessoal-deploy.onrender.com/tema/nome/${descricao}`,this.token)
  }

  postTema(tema:Tema): Observable<Tema>{
    return this.http.post<Tema>('https://blogpessoal-deploy.onrender.com/tema',tema,this.token)
  }

  putTema(tema: Tema): Observable<Tema>{
    return this.http.put<Tema>('https://blogpessoal-deploy.onrender.com/tema ',tema,this.token)
  }

  deleteTema(id:number){

    return this.http.delete(`https://blogpessoal-deploy.onrender.com/tema/${id}`,this.token)
  }
}
