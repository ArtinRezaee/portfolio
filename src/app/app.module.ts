import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { SmoothScrollToDirective, SmoothScrollDirective } from "ng2-Smooth-Scroll";
import { StickyNavModule } from 'ng2-sticky-nav';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    SmoothScrollToDirective,
    SmoothScrollDirective,
  ],
  imports: [
    BrowserModule,
    StickyNavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
