import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorListComponent } from './author/author-list/author-list.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { GameListComponent } from './game/game-list/game-list.component';
import { ClientsListComponent } from './clients/clients-list/clients-list.component';
import { PrestamoListComponent } from './prestamos/prestamo-list/prestamo-list.component';


const routes: Routes = [
    { path: '', redirectTo: '/games', pathMatch: 'full'},
    { path: 'categories', component: CategoryListComponent },
    { path: 'authors', component: AuthorListComponent },
    { path: 'games', component: GameListComponent },
    { path: 'clients', component: ClientsListComponent },
    { path: 'prestamos', component: PrestamoListComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
