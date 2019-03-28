const API_URL = 'https://glacial-plateau-74223.herokuapp.com/api/';
export class CourseServiceClient {

  findAllCourses = () =>
    fetch
    (API_URL+ 'allcourse')
      .then(response => response.json());


  findCourseById = courseId =>
    fetch
    (API_URL+ `course/${courseId}`)
      .then(response => response.json());





}
