import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { deLocale } from 'ngx-bootstrap/locale';
defineLocale('zh-cn', deLocale);

import { ChessGameComponent } from './chess-game/chess-game.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [
    ChessGameComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DatepickerModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [ChessGameComponent]
})
export class AppModule { }
