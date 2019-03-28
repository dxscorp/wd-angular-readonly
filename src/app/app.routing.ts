import { Routes, RouterModule } from '@angular/router';
import {CourseGridComponent} from "./course-grid/course-grid.component";
import {ModuleListComponent} from "./module-list/module-list.component";
import {CourseNavigatorComponent} from "./course-navigator/course-navigator.component";

const appRoutes: Routes = [
  { path: 'course/:courseId', component: CourseNavigatorComponent},
  {path: 'course', component: CourseGridComponent},
  {path: 'course/:courseId/module/:moduleId', component: CourseNavigatorComponent},
  {path: 'course/:courseId/module/:moduleId/lesson/:lessonId', component: CourseNavigatorComponent},
  {path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId', component: CourseNavigatorComponent},
  {path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId/widget', component: CourseNavigatorComponent},

  {path: '**', component: CourseGridComponent},

];

export const routing = RouterModule.forRoot(appRoutes);
