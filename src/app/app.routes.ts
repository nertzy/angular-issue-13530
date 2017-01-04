import {Routes} from "@angular/router";
import {RootComponent} from "./root.component";
import {RedirectToRootComponent} from "./redirect-to-root.component";
import {RedirectToRoot} from "./redirect-to-root";
import {RedirectToElsewhere} from "./redirect-to-elsewhere";
import {RedirectToElsewhereComponent} from "./redirect-to-elsewhere.component";
import {ElsewhereComponent} from "./elsewhere.component";

export const routes: Routes = [
  {
    path: "",
    component: RootComponent,
  },

  {
    path: "redirect-to-root",
    component: RedirectToRootComponent,
    canActivate: [RedirectToRoot],
  },

  {
    path: "redirect-to-elsewhere",
    component: RedirectToElsewhereComponent,
    canActivate: [RedirectToElsewhere],
  },

  {
    path: "elsewhere",
    component: ElsewhereComponent,
  },

];
