import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepagePageComponent {

  public card: any;
  public card2: any;

  constructor() {
    this.card = {
      header: {
        category: 'technology',
        icon: 'fullscreen_exit',
        title: 'Senior Front-End Developer',
        subtitle: 'Technology'
      },
      description: 'Continuously look for ways to improve conversion rates and implement A/B tests. Build better user...',
      imgSrc: '/assets/styleguide/tech.png'
    }

    this.card2 = {
      header: {
        category: 'applicant',
        icon: 'fullscreen_exit',
        title: 'Marco Solano Salas',
        subtitle: 'A few second ago'
      },
      description: 'Lorem ipsum dolor sit amet, consectetur adipisi cing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipisi cing elit, sed eiusmod tempor incidi...',
      email: 'marcoss@gmail.com',
      phone: '+506 8337-4462'
    }
  }

}
