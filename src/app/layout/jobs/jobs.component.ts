import {Component, OnInit} from '@angular/core';
import {JobService} from "../../services/job.service";
import {tap} from "rxjs";
import {Job} from "../../model/job";
import {NgForOf} from "@angular/common";
import {JobListElementComponent} from "../../components/job-list-element/job-list-element.component";

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

  constructor(private jobService: JobService){}

  ngOnInit() {
    this.jobService.getJobs().pipe(
      tap((jobs) => console.log('Job list: ', jobs)),
      tap((jobs) => this.jobList = jobs),
    ).subscribe();
  }
}
