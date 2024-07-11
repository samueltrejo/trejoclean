import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  template: `
    <section id="home" class="hero">
      <div class="hero-content">
        <h1>Sparkling Clean, Every Time</h1>
        <p>Experience the difference with our professional cleaning services.</p>
        <a href="#contact" class="btn">Get a Free Quote</a>
      </div>
    </section>
  `,
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

}
