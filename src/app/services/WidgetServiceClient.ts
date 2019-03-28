const API_URL = 'https://glacial-plateau-74223.herokuapp.com/api/';
export class WidgetServiceClient {


  findWidgetsForTopic= topicId =>
    fetch
    (API_URL+ `topic/${topicId}/widget`)
      .then(response => response.json());


  findAllWidgets = () =>
    fetch
    (API_URL+`allwidgets`)
      .then(response => response.json());

  findWidgetById = widgetId =>
    fetch
    (API_URL+ `widget/${widgetId}`)
      .then(response => response.json());

}
