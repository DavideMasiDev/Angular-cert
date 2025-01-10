import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Job} from "../model/job";
import {Observable} from "rxjs";
import {JobDetail} from "../model/job-detail";

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient) { }

  getJobs(): Observable<Array<Job>> {
    return this.http.get<Array<Job>>('/jobs');
  }

  getJobById(jobId: number): Observable<JobDetail> {
    return this.http.get<JobDetail>(`/jobs/${jobId}`);
  }
}
