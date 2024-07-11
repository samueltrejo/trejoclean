import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
  <section id="contact">
    <div class="container">
      <h2>Get in Touch</h2>
      <div class="contact-container">
        <div class="contact-info">
          <!-- <div>
            <div class="contact-info-item">
              <i class="fas fa-phone"></i>
              <p>Call Us: (615) 944-4791</p>
            </div>
            <div class="contact-info-item">
              <i class="fas fa-envelope"></i>
              <p>Email: <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="6d04030b022d0e01080c030e02430e0200">[email&#160;protected]</a></p>
            </div>
            <div class="contact-info-item">
              <i class="fas fa-map-marker-alt"></i>
              <p>Visit Us: 123 Clean Street, Sparkle City</p>
            </div>
            <div class="contact-info-item">
              <i class="fas fa-clock"></i>
              <p>Hours: Mon-Fri 8am-6pm, Sat 9am-3pm</p>
            </div>
          </div>
          <div>
            <h3>Connect With Us</h3>
            <div style="display: flex; gap: 1rem; margin-top: 1rem;">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style="color: var(--accent-color);"><i class="fab fa-facebook-f"></i></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style="color: var(--accent-color);"><i class="fab fa-twitter"></i></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style="color: var(--accent-color);"><i class="fab fa-instagram"></i></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style="color: var(--accent-color);"><i class="fab fa-linkedin-in"></i></a>
            </div>
          </div> -->
          <!-- TODO: Try to change svg accent color #6C63FF -->
          <img src="../../../cleaner.svg" alt="">
        </div>
        <div class="contact-form">
          <form action="https://websim.ai/c/CleanCo/contact" method="GET">
            <div class="form-group">
              <input id="name" type="text" placeholder=" " autocomplete="one-time-code" />
              <label for="name">First Name</label>
            </div>
            <div class="form-group">
              <input id="email" type="email" placeholder=" " autocomplete="one-time-code" required />
              <label for="email">Email Address</label>
            </div>
            <small>(Optional) Can we call you? Provide your phone.</small>
            <div class="form-group">
              <input id="phone" type="text" placeholder=" " autocomplete="one-time-code" />
              <label for="phone">Phone Number</label>
            </div>
            <!-- <div class="form-group">
              <input id="date" type="text" placeholder=" " autocomplete="one-time-code" onfocus="(this.type='date')" onblur="if(!this.value)this.type='text'" />
              <label for="phone">Date</label>
            </div> -->
            <small>Let us know how we can help, or a good time to reach you.</small>
            <div class="form-group">
              <textarea id="message" placeholder=" " autocomplete="one-time-code"></textarea>
              <label for="message">Short Message</label>
            </div>
            <button type="submit" class="btn">Request a Free Quote</button>
          </form>
        </div>
      </div>
    </div>
  </section>
  `,
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

}
