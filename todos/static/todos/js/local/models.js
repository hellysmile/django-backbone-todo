'use strict';


app.models.TodoModel = Backbone.Model.extend({
  idAttribute: 'pk',

  defaults: function () {
    return {
      title: '',
      done: false
    };
  },

  toggle: function () {
    this.save({
      done: !this.attributes.done
    });
  },

  url: function () {
    var url = API_ENDPOINT;

    var pk = this.attributes.pk;

    if (pk) {
      url = API_ENDPOINT + pk + '/';
    }

    return url;
  }
});
