import { Component, Inject, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { SessionService } from './core/services/session.service';

const adminMenu = [
  { icon: 'book-outline', title: 'Livres', children: [
    { icon: 'book-open-outline', title: 'Index', link: '/book/index' },
    { icon: 'plus', title: 'Nouveau', link: '/book/add' },
  ] }
]

const anonymousMenu = [
  { icon: 'book-outline', title: 'Livres', children: [
    { icon: 'book-open-outline', title: 'Index', link: '/book/index' },
  ] }
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  items!: NbMenuItem[]

  logged!: boolean;

  constructor(
    private readonly sessionService: SessionService,
  ) {
  }

  ngOnInit(): void {
    this.sessionService.data$
      .subscribe(model => {
        this.items = model?.role === 'Admin' ? adminMenu : anonymousMenu;
        this.logged = model !== null;
      });
  }
  

  logout() {
    this.sessionService.stop();
  }

}
