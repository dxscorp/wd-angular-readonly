import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { CourseGridComponent } from './course-grid/course-grid.component';
import { ModuleListComponent } from './module-list/module-list.component';
import {routing} from "./app.routing";
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';
import { TopicPillsComponent } from './topic-pills/topic-pills.component';
import { WidgetListComponent } from './widget-list/widget-list.component';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import {CourseServiceClient} from "./services/CourseServiceClient";
import {ModuleServiceClient} from "./services/ModuleServiceClient";
import {LessonServiceClient} from "./services/LessonServiceClient";
import {TopicServiceClient} from "./services/TopicServiceClient";
import {WidgetServiceClient} from "./services/WidgetServiceClient";




@NgModule({
  declarations: [
    AppComponent,
    CourseGridComponent,
    ModuleListComponent,
    LessonTabsComponent,
    TopicPillsComponent,
    WidgetListComponent,
    CourseNavigatorComponent
  ],
  imports: [
    routing,
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
  ],
  providers: [CourseServiceClient, ModuleServiceClient, LessonServiceClient,
  TopicServiceClient, WidgetServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
