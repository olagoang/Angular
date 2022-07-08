import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClientsService } from '../clients.service';
import { Clients } from '../model/Clients';

@Component({
  selector: 'app-clients-edit',
  templateUrl: './clients-edit.component.html',
  styleUrls: ['./clients-edit.component.scss']
})
export class ClientsEditComponent implements OnInit {

  client : Clients;

  constructor(
    public dialogRef: MatDialogRef<ClientsEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private clientService:ClientsService
  ) { }

  ngOnInit(): void {
    if (this.data.client != null) {
      this.client= Object.assign({}, this.data.client);
    }
    else {
      this.client = new Clients();
    }
      }
    
  onSave() {
    this.clientService.saveClient(this.client).subscribe(result => {
      this.dialogRef.close();
    });    
  }  

  onClose() {
    this.dialogRef.close();
  }



}
