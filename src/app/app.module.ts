import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChessGameComponent } from './chess-game/chess-game.component';

@NgModule({
  declarations: [
    ChessGameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ChessGameComponent]
})
export class AppModule { }
