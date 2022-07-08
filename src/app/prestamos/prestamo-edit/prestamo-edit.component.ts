import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PrestamoService } from '../prestamo.service';
import { Prestamo } from '../model/Prestamo';
import { Game } from 'src/app/game/model/Game';
import { Clients } from 'src/app/clients/model/Clients';
import { GameService } from 'src/app/game/game.service';
import { ClientsService } from 'src/app/clients/clients.service';
import { finalize } from 'rxjs';
@Component({
  selector: 'app-prestamo-edit',
  templateUrl: './prestamo-edit.component.html',
  styleUrls: ['./prestamo-edit.component.scss']
})
export class PrestamoEditComponent implements OnInit {

games: Game [];
clients: Clients[]
prestamo: Prestamo
prestamosValidar: Prestamo[]
prestamosValidarClientes: Prestamo[]
resultsGame : boolean
resultsClient : boolean

  constructor(
    public dialogRef: MatDialogRef<PrestamoEditComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private prestamoService: PrestamoService,
        private gameService: GameService,
        private clientService: ClientsService

  ) { }

  ngOnInit(): void {

    if (this.data.prestamo != null) {
      this.prestamo = Object.assign({}, this.data.prestamo);
  }
  else {
      this.prestamo = new Prestamo();
  }

  this.gameService.getGames().subscribe(
    results => {this.games=results
    if(this.prestamo.game!=null){
        let gameFilter: Game[] = results.filter(game => game.id == this.data.prestamo.game.id)
        if(gameFilter != null)
          this.prestamo.game = gameFilter[0]
    }
  }
  )

  this.clientService.getClients().subscribe(
    results => {this.clients=results
      if(this.prestamo.client!=null){
          let clientFilter: Clients[] = results.filter(client => client.id == this.data.prestamo.client.id)
          if(clientFilter != null)
            this.prestamo.client = clientFilter[0]
      }
    }
  )

  }

  onSave() {
    

    if(this.validarFechas(this.prestamo)==true && this.validarDiasPrestado(this.prestamo)==true && this.resultsGame==true && this.resultsClient==true)
    this.prestamoService.savePrestamo(this.prestamo).subscribe(result =>  {
        this.dialogRef.close();
    }); 
}  

comprobarJuegoEnUnDia(prestamo : Prestamo){
this.resultsGame=true
  this.prestamoService.comprobarJuegos(prestamo).pipe(finalize(() =>{

    this.comprobarClientes(prestamo)
  })).subscribe(
    result => { 
      this.prestamosValidar= result
      if(this.prestamosValidar.length>0)
        this.resultsGame=false
    }
  );


}

comprobarClientes(prestamo : Prestamo){
  this.resultsClient=true
  this.prestamoService.comprobarClientes(prestamo).pipe(finalize(() =>{
    
    this.onSave()
  })).subscribe(
    result => {
      this.prestamosValidarClientes=result
      if(this.prestamosValidarClientes.length>1)
        this.resultsClient=false
    }
  );

}

onClose() {
    this.dialogRef.close();
}

validarFechas(prestamo: Prestamo): boolean{
    return (prestamo.fechaOut>=prestamo.fechaIn)
}


validarDiasPrestado(prestamo: Prestamo): boolean{
  let result = false

  let date: Date = new Date(prestamo.fechaIn);
  let date2: Date = new Date(prestamo.fechaOut);

  date = this.addDays(date,14);

  if(date>=date2){
    result=true
  }

  return result
}



 addDays(date: Date, days: number): Date{
 let result = new Date(date);
 result.setDate(result.getDate()+days);
 return result;
}



}
