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
  subscription;
  courseId = 0;
  // modules = [];
  // lessons = [];
  // topics = [];
  // widgets = [];

  selectedModule = {};
  selectedLesson = {};
  selectedTopic = {};



  // selectTopic = topic => {
  //   this.selectedTopic = topic;
  //   this.service
  //     .findWidgetsForTopic(topic.id)
  //     .then(widgets => this.widgets = widgets)
  // };

  ngOnInit() {
    //
    // this.service
    //   .findModulesForCourse(this.courseId)
      // .then(modules => this.modules = modules)
      // .then(() => (this.modules.length >= 1 ? this.selectModule(this.modules[0]) : {}))
  }

  loadCourse(courseId){
    this.service.findCourseById(courseId)
      .then(course => this.course = course);

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
