import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  template: `
    <header>
      <nav class="container">
        <h1><i class="fas fa-broom"></i> TrejoClean</h1>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  `,
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

}
