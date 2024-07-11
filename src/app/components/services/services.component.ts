import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  template: `
    <section id="services" class="features">
      <div class="container">
        <h2>Our Services</h2>
        <div class="feature-grid">
          <div class="feature">
            <i class="fas fa-home"></i>
            <h3>Residential Cleaning</h3>
            <p>We make your home shine from top to bottom.</p>
          </div>
          <div class="feature">
            <i class="fas fa-building"></i>
            <h3>Commercial Cleaning</h3>
            <p>Keep your business spotless and professional.</p>
          </div>
          <div class="feature">
            <i class="fas fa-spray-can"></i>
            <h3>Deep Cleaning</h3>
            <p>For those times when you need extra attention to detail.</p>
          </div>
          <div class="feature">
            <i class="fas fa-box-open"></i>
            <h3>Move-in/Move-out Cleaning</h3>
            <p>Start fresh in your new space or leave your old one sparkling.</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

}
