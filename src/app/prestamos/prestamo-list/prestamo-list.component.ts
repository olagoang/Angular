import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DialogConfirmationComponent } from 'src/app/core/dialog-confirmation/dialog-confirmation.component';
import { Pageable } from 'src/app/core/model/page/Pageable';
import { PrestamoEditComponent } from '../prestamo-edit/prestamo-edit.component';
import { PrestamoService } from '../prestamo.service';
import { Prestamo } from '../model/Prestamo';
import { Game } from 'src/app/game/model/Game';
import { Clients } from 'src/app/clients/model/Clients';
import { ClientsService } from 'src/app/clients/clients.service';
import { GameService } from 'src/app/game/game.service';
import { PrestamoPage } from '../model/PrestamoPage';

@Component({
  selector: 'app-prestamo-list',
  templateUrl: './prestamo-list.component.html',
  styleUrls: ['./prestamo-list.component.scss']
})
export class PrestamoListComponent implements OnInit {

  pageNumber: number = 0;
  pageSize: number = 5;
  totalElements: number = 0;

  dataSource = new MatTableDataSource<Prestamo>();
  displayedColumns: string[] = ['id', 'title', 'name','fecha_in','fecha_out', 'action'];

  clients : Clients[];
    games: Game[];
    prestamoPage: PrestamoPage;
    filterClient: string;
    filterTitle: string;
    filterFecha: Date;


  constructor(
    private prestamoService: PrestamoService,
    
    
        public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    

    this.loadPage();

    


  

  }

  onCleanFilter(): void {
    this.filterTitle = null;
    this.filterClient = null;
    this.filterFecha = null;
    this.onSearch();
}

onSearch(): void {

  let pageable =  {
    pageNumber: this.pageNumber,
    pageSize: this.pageSize,
    sort: [{
        property: 'id',
        direction: 'ASC'
    }]
}


  let title =this.filterTitle!= null ? this.filterTitle: null;
  
  let client= this.filterClient!= null ? this.filterClient: null;
  let fecha= this.filterFecha;


  this.prestamoService.getPrestamosFiltered(title, client, fecha, pageable).subscribe(
    data =>{
      this.dataSource.data = data.content;

      this.pageNumber = data.pageable.pageNumber;
      this.pageSize = data.pageable.pageSize;
      this.totalElements = data.totalElements;
    } 
  );


  
}

  loadPage(event?: PageEvent) {

    let pageable =  {
        pageNumber: this.pageNumber,
        pageSize: this.pageSize,
        sort: [{
            property: 'id',
            direction: 'ASC'
        }]
    }

    if (event != null) {
        pageable.pageSize = event.pageSize
        pageable.pageNumber = event.pageIndex;
    }

    let title =this.filterTitle!= null ? this.filterTitle: null;
  
  let client= this.filterClient!= null ? this.filterClient : null;
  let fecha= this.filterFecha;

    this.prestamoService.getPrestamosFiltered(title, client, fecha, pageable).subscribe(
      data =>{
        this.dataSource.data = data.content;
  
        this.pageNumber = data.pageable.pageNumber;
        this.pageSize = data.pageable.pageSize;
        this.totalElements = data.totalElements;
      } 
    );


  }

  createPrestamo() {      
    const dialogRef = this.dialog.open(PrestamoEditComponent, {
        data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
        this.ngOnInit();
    });      
  } 

  editPrestamo(prestamo: Prestamo) {    
    const dialogRef = this.dialog.open(PrestamoEditComponent, {
        data: { prestamo : prestamo }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
  });    
  }

  deletePrestamo(prestamo: Prestamo) {    
    const dialogRef = this.dialog.open(DialogConfirmationComponent, {
        data: { title: "Eliminar prestamo", description: "Atención si borra el prestamo se perderán sus datos.<br> ¿Desea eliminar el prestamo?" }
    });

    dialogRef.afterClosed().subscribe(result => {
        if (result) {
            this.prestamoService.deletePrestamo(prestamo.id).subscribe(result =>  {
                this.ngOnInit();
            }); 
        }
    });
} 

}
