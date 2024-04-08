import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importez FormsModule ici
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component'; // Assurez-vous que le chemin vers votre composant est correct
// Importez d'autres composants et services comme nécessaire

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    // Déclarez d'autres composants ici
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    AppRoutingModule// Ajoutez FormsModule aux imports
    // Ajoutez d'autres modules ici
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
