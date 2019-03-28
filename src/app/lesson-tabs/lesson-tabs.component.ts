import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {ModuleServiceClient} from "../services/ModuleServiceClient";
import {ActivatedRoute} from "@angular/router";
import {LessonServiceClient} from "../services/LessonServiceClient";

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.scss']
})
export class LessonTabsComponent implements OnInit {

  constructor(private service: LessonServiceClient,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => this.loadParams(params))

  }


  moduleId;
  lessonId;
  courseId;
  lessons = [];
  selectedLesson = {};

  loadParams(params){
    this.courseId = params["courseId"];
    this.moduleId = params["moduleId"];
    this.lessonId = params["lessonId"];
    this.loadLessons(this.moduleId);
  }

  ngOnInit() {

    // this.service.findLessonsForModule(this.module.id)
    //   .then(lessons => this.lessons = lessons)
    //   .then(() => (this.lessons.length >= 1 ? this.selectLesson(this.lessons[0]) : {}))
    //
    // console.log(this.lessons.length)

  }

  loadLessons(moduleId){
    this.service.findLessonsForModule(moduleId)
      .then(lessons => this.lessons = lessons)
  }



}
