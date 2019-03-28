const API_URL = 'https://glacial-plateau-74223.herokuapp.com/api/';
export class TopicServiceClient {


  findTopicsForLesson = lessonId =>
    fetch
    (API_URL+`lesson/${lessonId}/topic`)
      .then(response => response.json());

  findAllTopics = () =>
    fetch
    (API_URL+`alltopics`)
      .then(response => response.json());

  findTopicById = topicId =>
    fetch
    (API_URL+ `topic/${topicId}`)
      .then(response => response.json());
}
