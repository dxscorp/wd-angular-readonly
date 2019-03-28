import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import {CourseServiceClient} from "../services/CourseServiceClient";


@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.scss']
})
export class CourseNavigatorComponent implements OnInit {

  constructor(private service: CourseServiceClient,
              private activatedRouter: ActivatedRoute) {
    this.activatedRouter.params.subscribe(params => this.loadCourse(params['courseId']))

  }

  course: {};
  courseTitle: "";
  courseId = 0;






  ngOnInit() {

  }

  loadCourse(courseId){
    this.service.findCourseById(courseId)
      .then(course => {
        this.course = course;
        this.courseTitle = course.title;
      });

  }



  // onSelectedLesson(lesson){
  //   this.selectedLesson = lesson;
  // }
  // onSelectedModule(module){
  //   this.selectedModule = module;
  //   console.log("HELLO THERE")
  //   console.log("SELECTED MOD IS: " + this.selectedModule)
  // }
}
