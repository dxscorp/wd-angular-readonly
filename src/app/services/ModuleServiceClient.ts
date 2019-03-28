const API_URL = 'https://glacial-plateau-74223.herokuapp.com/api/';
export class ModuleServiceClient {

  findModulesForCourse = courseId =>
    fetch
    (API_URL+`course/${courseId}/module`)
      .then(response => response.json());

  findAllModules = () =>
    fetch
    (API_URL+`allmodules`)
      .then(response => response.json());

  findModuleById = moduleId =>
    fetch
    (API_URL+ `module/${moduleId}`)
      .then(response => response.json());
}

