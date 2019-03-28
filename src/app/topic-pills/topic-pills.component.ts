import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LessonServiceClient} from "../services/LessonServiceClient";
import {TopicServiceClient} from "../services/TopicServiceClient";

@Component({
  selector: 'app-topic-pills',
  templateUrl: './topic-pills.component.html',
  styleUrls: ['./topic-pills.component.scss']
})


export class TopicPillsComponent implements OnInit {

  constructor(private service: TopicServiceClient,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => this.loadParams(params))

  }


  moduleId;
  lessonId;
  courseId;
  topicId;
  topics = [];

  loadParams(params){
    this.courseId = params["courseId"];
    this.moduleId = params["moduleId"];
    this.lessonId = params["lessonId"];
    this.topicId = params["topicId"];
    this.loadTopics(this.lessonId);
  }

  ngOnInit() {

    // this.service.findLessonsForModule(this.module.id)
    //   .then(lessons => this.lessons = lessons)
    //   .then(() => (this.lessons.length >= 1 ? this.selectLesson(this.lessons[0]) : {}))
    //
    // console.log(this.lessons.length)

  }

  loadTopics(lessonId){
    console.log("looking for lesson: " + lessonId)
    this.service.findTopicsForLesson(lessonId)
      .then(topics => this.topics = topics)
  }

}
