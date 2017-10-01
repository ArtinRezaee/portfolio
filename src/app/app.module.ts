import { FIREBASE_CONFIG } from './app.firebaseconfig';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { emailValidator } from './email.validator';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { SmoothScrollToDirective, SmoothScrollDirective } from "ng2-Smooth-Scroll";
import { StickyNavModule } from 'ng2-sticky-nav';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SmoothScrollToDirective,
    SmoothScrollDirective,
    DialogComponent,
  ],
  entryComponents: [
    DialogComponent
  ],
  imports: [
    BrowserModule,
    StickyNavModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [emailValidator],
  bootstrap: [AppComponent],
})
export class AppModule { }
