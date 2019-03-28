import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CourseServiceClient} from "../services/CourseServiceClient";

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.scss']
})
export class CourseGridComponent implements OnInit {

  constructor(
    private router: Router,
    private service: CourseServiceClient) { }


  courses = []

  ngOnInit() {
    this.service
      .findAllCourses()
      .then(courses => this.courses = courses)
  }


}
