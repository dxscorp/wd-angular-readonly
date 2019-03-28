import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import {ModuleServiceClient} from "../services/ModuleServiceClient";



@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.scss']
})
export class ModuleListComponent implements OnInit {

  constructor(private service: ModuleServiceClient,
              private activatedRouter: ActivatedRoute) {

    this.activatedRouter.params.subscribe(params => this.setParams(params))

  }


  modules = [];
  courseId;
  moduleId;
  selectedModule = {};



  setParams(params){
    this.courseId = params["courseId"];
    this.moduleId = params["moduleId"];
    this.loadModules(this.courseId);

    console.log(this.courseId)
    console.log(this.moduleId)

  }

  ngOnInit() {


  }

  loadModules(courseId){
    this.service
      .findModulesForCourse(courseId)
      .then(modules => this.modules = modules)
  }


}
