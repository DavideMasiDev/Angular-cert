import {AfterContentInit, AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterOutlet} from '@angular/router';
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
  activeTab?: 'jobs' | 'favorites';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    if (window.location.href.includes('/jobs')) {
      this.activeTab = 'jobs';
    } else if (window.location.href.includes('/favorites')) {
      this.activeTab = 'favorites';
    }
  }

  tabSwitch(tab: 'jobs' | 'favorites') {
    if (this.activeTab !== tab) {
      this.activeTab = tab;
      this.router.navigate([tab]);
    }
  }
}
