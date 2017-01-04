import {Component} from "@angular/core";

@Component({
  template: `<p>This is the "redirect to elsewhere" component.</p>`
})
export class RedirectToElsewhereComponent {
  constructor() {
    console.log("[RedirectToElsewhereComponent] constructor called");
  }
}
