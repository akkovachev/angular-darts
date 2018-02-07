import { BoardService } from './services/board.service';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BoardComponentComponent } from './board-component/board-component.component';
import { PlayerComponentComponent } from './player-component/player-component.component';


@NgModule({
  declarations: [
    AppComponent,
    BoardComponentComponent,
    PlayerComponentComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [BoardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
