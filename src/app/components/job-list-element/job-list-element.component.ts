import {Component, Input} from '@angular/core';
import {Job} from "../../model/job";

@Component({
  selector: 'app-job-list-element',
  standalone: true,
  imports: [],
  templateUrl: './job-list-element.component.html',
  styleUrl: './job-list-element.component.css'
})
export class JobListElementComponent {
  @Input() job!: Job;

  constructor() {
  }
}
