import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pageable } from '../core/model/page/Pageable';
import { Prestamo } from './model/Prestamo';
import { PrestamoPage } from './model/PrestamoPage';
import { PRESTAMOS_DATA, PRESTAMOS_DATA_FILTERED } from './model/mock-prestamos'
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class PrestamoService {
  
  

  constructor(
  private http: HttpClient

  ) { }

  getPrestamos(pageable: Pageable): Observable<PrestamoPage>{
    return this.http.post<PrestamoPage>("http://localhost:8080/prestamo", {pageable:pageable});

  }

  getPrestamosFiltered(title?:string, client?:string, fecha?: Date, pageable?: Pageable): Observable<PrestamoPage> {
    let url = this.getComposeUrl(title,client,fecha)
    return this.http.post<PrestamoPage>(url,{pageable:pageable});
}

  savePrestamo(prestamo:Prestamo): Observable<any>{
    
    let url ="http://localhost:8080/prestamo"

    if(prestamo.id!=null)
      url+="/"+prestamo.id

    return this.http.put<Prestamo>(url,prestamo)
  }

  comprobarJuegos(prestamo: Prestamo): Observable<Prestamo[]> {
    let idGame= prestamo.game.id
    let fechaIn = prestamo.fechaIn
    let fechaOut = prestamo.fechaOut

    let url ="http://localhost:8080/prestamo/games?idGame="+idGame+"&fechaOut="+fechaOut+"&fechaIn="+fechaIn

    return this.http.get<Prestamo[]>(url)
    
  }

  comprobarClientes(prestamo: Prestamo): Observable<Prestamo[]> {
    let idClient= prestamo.client.id
    let fechaIn = prestamo.fechaIn
    let fechaOut = prestamo.fechaOut

    let url ="http://localhost:8080/prestamo/clients?idClient="+idClient+"&fechaOut="+fechaOut+"&fechaIn="+fechaIn
    return this.http.get<Prestamo[]>(url)

  }

  deletePrestamo(idPrestamo:number):Observable<any>{
    let url ="http://localhost:8080/prestamo/" +idPrestamo

    return this.http.delete<Prestamo>(url)
  }

  getComposeUrl(title: string, client: string, fecha?: Date){
    let url ="http://localhost:8080/prestamo"
    let param = ""

/*
    if(title!=null || client!=null || fecha!=null)
      url+="?"
*/

    if(title!=null)
      param+="title=" + title

    if(client!=null)
      param+="&client=" + client  

    if(fecha!=null)
      param+="&fecha=" + fecha

    if(param!=null)
      url+="?"+param

    return url
  }
  
}
