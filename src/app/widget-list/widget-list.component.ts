import { Component, OnInit } from '@angular/core';
import {LessonServiceClient} from "../services/LessonServiceClient";
import {ActivatedRoute} from "@angular/router";
import {TopicServiceClient} from "../services/TopicServiceClient";
import {WidgetServiceClient} from "../services/WidgetServiceClient";

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.scss']
})
export class WidgetListComponent implements OnInit {

  constructor(private service: WidgetServiceClient,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => this.loadParams(params))

  }

  strings = [];
  moduleId;
  lessonId;
  courseId;
  topicId;
  widgets = [];

  loadParams(params){
    this.courseId = params["courseId"];
    this.moduleId = params["moduleId"];
    this.lessonId = params["lessonId"];
    this.topicId = params["topicId"];
    this.loadWidgets(this.topicId);
  }

  ngOnInit() {

    // this.service.findLessonsForModule(this.module.id)
    //   .then(lessons => this.lessons = lessons)
    //   .then(() => (this.lessons.length >= 1 ? this.selectLesson(this.lessons[0]) : {}))
    //
    // console.log(this.lessons.length)

  }

  loadWidgets(topicId){
    console.log("looking for lesson: " + topicId)
    this.service.findWidgetsForTopic(topicId)
      .then(widgets => this.widgets = widgets)
  }

  isParagraphWidget(widget){
    return widget.widgetType === "paragraph"
  }

  isLinkWidget(widget){
    return widget.widgetType === "link"
  }

  isHeader1Widget(widget){
    return widget.widgetType === "heading" && widget.size == 1;
  }

  isHeader2Widget(widget){
    return widget.widgetType === "heading" && widget.size == 2;
  }

  isHeader3Widget(widget){
    return widget.widgetType === "heading" && widget.size == 3;
  }

  isHeader4Widget(widget){
    return widget.widgetType === "heading" && widget.size == 4;
  }

  isHeader5Widget(widget){
    return widget.widgetType === "heading" && widget.size == 5;
  }

  isHeader6Widget(widget){
    return widget.widgetType === "heading" && widget.size == 6;
  }

  isOrderedListWidget(widget){
    return widget.widgetType === "list" && widget.ordered;
  }

  isUnorderedListWidget(widget){
    return widget.widgetType === "list" && !widget.ordered;
  }

  isImageWidget(widget){
    return widget.widgetType === "image";
  }

}
