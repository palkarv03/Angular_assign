import { Component } from "@angular/core";

@Component({
  selector: "app-lorem",
  template: `
  <hr/><hr/>
    <div class="container">
      <br /><br /><br /><br /><br />
      <h3>LoremPixel Art</h3>
      <img src="{{ imgURL}}"/>
    </div>
    <br /><br />
  `,
})
export class lorempixelComponent {
  imgURL = "http://lorempixel.com/400/200";
}
//line 9
// | add_s: 4 