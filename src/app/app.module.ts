import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({"projectId":"eilgoal","appId":"1:451422785043:web:c5550f56e6ad81ff4e39e6","storageBucket":"eilgoal.appspot.com","apiKey":"AIzaSyAl92ytU9-bU7PovpIUhWe6RvfHj-PC5ow","authDomain":"eilgoal.firebaseapp.com","messagingSenderId":"451422785043"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
