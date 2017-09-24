import { FIREBASE_CONFIG } from './app.firebaseconfig';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { emailValidator } from './email.validator';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { SmoothScrollToDirective, SmoothScrollDirective } from "ng2-Smooth-Scroll";
import { StickyNavModule } from 'ng2-sticky-nav';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    SmoothScrollToDirective,
    SmoothScrollDirective,
  ],
  imports: [
    BrowserModule,
    StickyNavModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule
  ],
  providers: [emailValidator],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
