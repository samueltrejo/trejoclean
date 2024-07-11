import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <section id="about" class="about">
      <div class="container">
        <h2>Why Choose Us?</h2>
        <p class="subheading">We are committed to providing top-quality cleaning services with professionalism and care.</p>
        <div class="about-grid">
          <div class="about-item">
            <i class="fas fa-shield-alt"></i>
            <h3>Licensed & Insured</h3>
            <p>Your peace of mind is our priority. We're fully licensed and insured for your protection.</p>
          </div>
          <div class="about-item">
            <i class="fas fa-leaf"></i>
            <h3>Eco-Friendly</h3>
            <p>We use environmentally friendly products that are safe for your family and pets.</p>
          </div>
          <div class="about-item">
            <i class="fas fa-users"></i>
            <h3>Experienced Team</h3>
            <p>Our skilled professionals are trained to deliver exceptional results.</p>
          </div>
          <div class="about-item">
            <i class="fas fa-check-circle"></i>
            <h3>100% Satisfaction</h3>
            <p>We guarantee your satisfaction with our thorough and reliable service.</p>
          </div>
        </div>
        <a href="#contact" class="btn">Get Started Today</a>
      </div>
    </section>
  `,
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

}
