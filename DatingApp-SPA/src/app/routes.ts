import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './member-list/member-list.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './_guards/auth.guard';

// rute rade po principu na koji prvi naleti, ako ne naleti ni na jedan od ovih pogodice '**'
// i on ce da ga redirektuje na home, znaci da ta ruta ne postoji na nasoj app
// posto je bitan red, onda to mora da bude na kraju
export const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    {
        //ovde stoji prazan string zato sto se lepi to sto je u njemu na ove dule rute
        // da je pisalo na primer 'ivan', nasqa ruta bi bila localhost:4200/ivanmembers
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'members', component: MemberListComponent},
            { path: 'messages', component: MessagesComponent},
            { path: 'lists', component: ListsComponent},
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full'}
];

