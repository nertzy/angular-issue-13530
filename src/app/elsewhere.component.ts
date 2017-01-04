import {Component} from "@angular/core";

@Component({
  template: `
<p>This is the elsewhere component.</p>
`
})
export class ElsewhereComponent {
  constructor() {
    console.log("[ElsewhereComponent] constructor called");
  }
}
