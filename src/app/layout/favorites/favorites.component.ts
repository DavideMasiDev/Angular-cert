import {Component, OnInit} from '@angular/core';
import {map, tap} from "rxjs";
import {STORAGE_KEY} from "../../utility/constants";
import {JobListElementComponent} from "../../components/job-list-element/job-list-element.component";
import {NgForOf, NgIf} from "@angular/common";
import {Job} from "../../model/job";
import {JobService} from "../../services/job.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [
    JobListElementComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent implements OnInit {
  favoriteItems: Array<string> = [];
  jobList: Array<Job> = [];

  constructor(private jobService: JobService, private router: Router) {
  }

  ngOnInit() {
    if (localStorage.getItem(STORAGE_KEY)) {
      this.favoriteItems = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '')
    } else {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    }

    this.jobService.getJobs().pipe(
      tap((jobs) => console.log('Job list: ', jobs)),
      map((jobs) => {
        const favoriteJobsIds: Array<number> = this.favoriteItems.map((item) => parseInt(item.split('star-')[1] ?? '') )
        return {jobs, favoriteJobsIds}
      }),
      tap(({jobs, favoriteJobsIds}) => this.jobList = jobs.filter((job) => favoriteJobsIds.includes(job.id))),
    ).subscribe();
  }

  goToJob(jobId: number) {
    this.router.navigate([`job/${jobId}`]);
  }
}
