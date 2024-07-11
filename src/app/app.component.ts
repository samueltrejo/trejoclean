import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-navigation></app-navigation>
    <app-landing></app-landing>
    <app-services></app-services>
    <app-about></app-about>
    <app-contact></app-contact>
    <app-footer></app-footer>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'trejoclean';
}
