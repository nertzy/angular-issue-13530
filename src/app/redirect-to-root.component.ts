import {Component} from "@angular/core";

@Component({
  template: `<p>This is the "redirect to root" component.</p>`
})
export class RedirectToRootComponent {
  constructor() {
    console.log("[RedirectToRootComponent] constructor called");
  }
}
