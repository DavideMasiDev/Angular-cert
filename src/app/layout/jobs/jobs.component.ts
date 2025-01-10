import {Component, OnInit} from '@angular/core';
import {JobService} from "../../services/job.service";
import {tap} from "rxjs";
import {Job} from "../../model/job";
import {NgForOf} from "@angular/common";
import {JobListElementComponent} from "../../components/job-list-element/job-list-element.component";
import {STORAGE_KEY} from "../../utility/constants";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgForOf,
    JobListElementComponent
  ],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent implements OnInit{
  jobList: Array<Job> = [];
  favoriteItems: Array<string> = [];

  constructor(private jobService: JobService, private router: Router){}

  ngOnInit() {
    this.jobService.getJobs().pipe(
      tap((jobs) => console.log('Job list: ', jobs)),
      tap((jobs) => this.jobList = jobs),
    ).subscribe();

    if (localStorage.getItem(STORAGE_KEY)) {
      this.favoriteItems = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '')
    } else {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    }
  }

  favoriteHandler(jobId: string){
    console.log('Job Id', jobId)
    const index = this.favoriteItems.findIndex((item) => item === jobId)
    if (index >= 0) {
      // remove job from favorite's list
      this.favoriteItems.splice(index, 1);
    } else {
      // add job to the favorite's list
      this.favoriteItems.push(jobId)
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.favoriteItems))
  }

  goToJob(jobId: number) {
    this.router.navigate([`job/${jobId}`]);
  }
}
