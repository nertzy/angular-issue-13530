import {Component} from "@angular/core";

@Component({
  template: `
<p>This is the root component.</p>
<p><a href="./redirect-to-root">Go to /redirect-to-root (full page refresh)</a></p>
<p><a href="./redirect-to-elsewhere">Go to /redirect-to-elsewhere (full page refresh)</a></p>
`
})
export class RootComponent {
  constructor() {
    console.log("[RootComponent] constructor called");
  }
}
