import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Clients } from './model/Clients';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(
    private http: HttpClient

  ) { }

  getClients(): Observable<Clients[]>{
    return this.http.get<Clients[]>('http://localhost:8080/clients');

  }

  saveClient(client: Clients): Observable<Clients>{
    let url = 'http://localhost:8080/clients';
        if (client.id != null) url += '/'+client.id;

        return this.http.put<Clients>(url, client);
  }
  
  deleteClient(idClient: number): Observable<any> {
    return this.http.delete('http://localhost:8080/clients/'+idClient);
  }  
}
