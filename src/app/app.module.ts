import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {routes} from "./app.routes";
import {RootComponent} from "./root.component";
import {FormsModule} from "@angular/forms";
import {RedirectToRootComponent} from "./redirect-to-root.component";
import {RedirectToRoot} from "./redirect-to-root";
import {RedirectToElsewhereComponent} from "./redirect-to-elsewhere.component";
import {ElsewhereComponent} from "./elsewhere.component";
import {RedirectToElsewhere} from "./redirect-to-elsewhere";

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    RedirectToRootComponent,
    RedirectToElsewhereComponent,
    ElsewhereComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    RedirectToRoot,
    RedirectToElsewhere,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
