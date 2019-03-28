const API_URL = 'https://glacial-plateau-74223.herokuapp.com/api/';
export class LessonServiceClient {



  findLessonsForModule = moduleId =>
    fetch
    (API_URL + `module/${moduleId}/lesson`)
      .then(response => response.json());

  findAllLessons = () =>
    fetch
    (API_URL+`alllessons`)
      .then(response => response.json());

  findLessonById = lessonId =>
    fetch
    (API_URL+ `lesson/${lessonId}`)
      .then(response => response.json());
}
