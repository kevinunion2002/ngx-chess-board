import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChessBoardModule } from 'ngx-chess-board';
import { AppComponent } from './app.component';
import { ActionsComponent } from './components/actions/actions.component';
import { FenComponent } from './components/fen/fen.component';
import { MovesComponent } from './components/moves/moves.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ChessboardComponent } from './chessboard/chessboard.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AppRoutingModule } from './app-routing.module';
import { Chessboard2Component } from './chessboard2/chessboard2.component';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



@NgModule({
    declarations: [AppComponent, ActionsComponent, SettingsComponent, MovesComponent, FenComponent, ChessboardComponent, MainpageComponent, Chessboard2Component],
    imports: [BrowserModule,AppRoutingModule, FormsModule, NgxChessBoardModule.forRoot()],
    bootstrap: [AppComponent],
})
export class AppModule {}
