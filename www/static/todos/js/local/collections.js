'use strict';


app.collections.TodoCollection = Backbone.Collection.extend({
  model: app.models.TodoModel,

  url: function () {
    return API_ENDPOINT;
  },

  parse: function (response) {
    return response;
  }
});
