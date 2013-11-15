'use strict';


app.routers.TodoRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    '!/list/': 'list',
    '!/create/': 'create',
    '!/update/:pk/': 'update',
    ':path': 'index'
  },

  initialize: function (options) {
    this.holder = options.holder;
    this.model = options.model;
    this.collection = options.collection;
    this.list_template = options.list_template;
    this.list_view = options.list_view;
    this.detail_holder = options.detail_holder;
    this.detail_template = options.detail_template;
    this.detail_view = options.detail_view;
    this.create_template = options.create_template;
    this.create_view = options.create_view;
    this.update_template = options.update_template;
    this.update_view = options.update_view;
  },

  redirect: function (path) {
    this.navigate(path, {
      trigger: true,
      replace: false
    });
  },

  redirect_to_update: function (pk) {
    this.redirect('!/update/' + pk + '/');
  },

  redirect_to_list: function (pk) {
    this.redirect('!/list/');
  },

  index: function (path) {
    this.redirect('!/list/');
  },

  list: function () {
    var list_view = new this.list_view({
      holder: this.holder,
      collection: this.collection,
      list_template: this.list_template,
      detail_holder: this.detail_holder,
      detail_template: this.detail_template,
      detail_view: this.detail_view,
      router: this
    });
  },

  create: function () {
    var create_view = new this.create_view({
      holder: this.holder,
      model: this.model,
      create_template: this.create_template,
      router: this
    });
  },

  update: function (pk) {
    var update_view = new this.update_view({
      holder: this.holder,
      pk: pk,
      model: this.model,
      update_template: this.update_template,
      router: this
    });
  }
});
