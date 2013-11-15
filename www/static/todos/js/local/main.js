'use strict';


(function () {
  (function ($) {
    $(document).ready(function () {
      var router = new app.routers.TodoRouter({
        holder: '#holder',
        model: app.models.TodoModel,
        collection: app.collections.TodoCollection,
        list_template: '#todo-list-template',
        list_view: app.views.TodoListView,
        detail_holder: '#todo-detail-holder',
        detail_template: '#todo-detail-template',
        detail_view: app.views.TodoDetailView,
        create_template: '#todo-create-template',
        create_view: app.views.CreateView,
        update_template: '#todo-update-template',
        update_view: app.views.UpdateView
      });

      Backbone.history.start();
    });
  }(jQuery));
}).call(this);
