import { BoardService } from './services/board.service';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BoardComponentComponent } from './board-component/board-component.component';
import { PlayerComponentComponent } from './player-component/player-component.component';
import { FormsModule }   from '@angular/forms';
import { CricketComponent } from './cricket/cricket.component';
import { PlayerComponent } from './cricket/player/player.component';
import { CricketService } from './services/cricket.service';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponentComponent,
    PlayerComponentComponent,
    CricketComponent,
    PlayerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [BoardService, CricketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
