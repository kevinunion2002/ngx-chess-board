import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChessboardComponent } from './chessboard/chessboard.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { Chessboard2Component } from './chessboard2/chessboard2.component';

const routes: Routes = [
  { path: 'iframepage', component: ChessboardComponent },
  { path: 'iframepage2', component: Chessboard2Component },
  { path: 'mainpage', component: MainpageComponent },
  { path: '', redirectTo: '/mainpage', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
