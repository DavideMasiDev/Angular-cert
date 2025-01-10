import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {filter, of, switchMap, tap} from "rxjs";
import {JobService} from "../../services/job.service";
import {JobDetail} from "../../model/job-detail";
import {DatePipe, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-job-detail',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    DatePipe
  ],
  templateUrl: './job-detail.component.html',
  styleUrl: './job-detail.component.css'
})
export class JobDetailComponent implements AfterViewInit {
  @ViewChild('description', {static: false}) description: any;

  jobId?: number;
  jobDetails?: JobDetail;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private jobService: JobService) {
  }

  ngAfterViewInit() {
    this.activatedRoute.paramMap.pipe(
      tap((params) => this.jobId = parseInt(params.get('id') ?? '')),
      switchMap(() => this.jobId ? this.jobService.getJobById(this.jobId) : of(undefined)),
      tap((job) => this.jobDetails = job),
      tap(() => this.description.nativeElement.innerHTML = this.jobDetails?.description),
      tap(() => console.log(this.jobDetails))
    ).subscribe();
  }

  formatString(value: string){
    return value.replace(/&amp;/g, "&");
  }

  goBack() {
    this.router.navigate(['jobs'])
  }

}
