import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrestamoListComponent } from './prestamo-list/prestamo-list.component';
import { PrestamoEditComponent } from './prestamo-edit/prestamo-edit.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PrestamoItemComponent } from './prestamo-edit/prestamo-item/prestamo-item.component';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    PrestamoListComponent,
    PrestamoEditComponent,
    PrestamoItemComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule, 
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
  ]
})
export class PrestamosModule { }
