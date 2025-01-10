import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Job} from "../../model/job";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-job-list-element',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './job-list-element.component.html',
  styleUrl: './job-list-element.component.css'
})
export class JobListElementComponent {
  @Input() job!: Job;
  @Input() favoriteItems: Array<string> = [];
  @Input() showStar: boolean = true;

  @Output() starClicked: EventEmitter<string> = new EventEmitter<string>();
  @Output() jobClicked: EventEmitter<number> = new EventEmitter<number>();
  constructor() {
  }
}
