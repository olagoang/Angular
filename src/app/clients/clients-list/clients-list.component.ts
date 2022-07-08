import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Clients } from '../model/Clients';
import { ClientsService } from '../clients.service';
import { MatDialog } from '@angular/material/dialog';
import { ClientsEditComponent } from '../clients-edit/clients-edit.component';
import { DialogConfirmationComponent } from 'src/app/core/dialog-confirmation/dialog-confirmation.component';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})
export class ClientsListComponent implements OnInit {

  dataSource = new MatTableDataSource<Clients>();
  displayedColumns: string[] = ['id', 'name', 'action'];
  constructor(
    private clientsService: ClientsService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {

    this.clientsService.getClients().subscribe(
      clients =>this.dataSource.data=clients
    );
  }

  createClient(){ 
    const dialogRef= this.dialog.open(ClientsEditComponent, {
      data:{}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  editClient(client: Clients){ 
    const dialogRef= this.dialog.open(ClientsEditComponent, {
      data:{client : client}
      
      
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  deleteClient(client: Clients) {    
    const dialogRef = this.dialog.open(DialogConfirmationComponent, {
      data: { title: "Eliminar categoría", description: "Atención si borra la categoría se perderán sus datos.<br> ¿Desea eliminar la categoría?" }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.clientsService.deleteClient(client.id).subscribe(result => {
          this.ngOnInit();
        }); 
      }
    });
  }  

}
