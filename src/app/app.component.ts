import {AfterContentInit, AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {tap} from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ng-job-search';
  activeTab?: 'jobs' | 'favorites' = "jobs";
  currentUrl: string = '';
  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.urlAfterRedirects; // URL aggiornato
      }
      if (this.currentUrl === '/jobs' || this.currentUrl === '/favorites') {
        this.activeTab = this.currentUrl.split('/')[1] as 'jobs' | 'favorites';
      }
    });
  }

  tabSwitch(tab: 'jobs' | 'favorites') {
    if (this.activeTab !== tab) {
      this.activeTab = tab;
      this.router.navigate([tab]);
    }
  }
}
