'use strict';

app.views.TodoDetailView = Backbone.View.extend({
  tagName: 'tr',

  events: {
    'click #toggle': 'toggle',
    'click #value': 'update',
    'click #destroy': 'destroy'
  },

  initialize: function (options) {
    this.model = options.model;
    this.detail_template = $(options.detail_template);
    this.router = options.router;

    this.template = _.template(this.detail_template.html());

    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
  },

  toggle: function () {
    this.model.toggle();
  },

  update: function () {
    this.router.redirect_to_update(this.model.attributes.pk);
  },

  destroy: function () {
    this.model.destroy();
  },

  render: function () {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }

});


app.views.TodoListView = Backbone.View.extend({
  tagName: 'div',

  className: 'table-responsive',

  initialize: function (options) {
    this.holder = $(options.holder);
    this.collection = new options.collection();
    this.list_template = $(options.list_template);
    this.detail_holder = options.detail_holder;
    this.detail_template = options.detail_template;
    this.detail_view = options.detail_view;
    this.router = options.router;

    this.template = _.template(this.list_template.html());

    this.constract();

    this.listenTo(this.collection, 'reset', this.render);
  },

  constract: function () {
    this.collection.fetch({reset: true});

    this.$el.html(this.template);
    this.holder.html(this.el);
    this.detail_holder = $(this.detail_holder);
  },

  render: function () {
    this.collection.each(this.render_model.bind(this));
  },

  render_model: function (model) {
    var detail_view = new this.detail_view({
      model: model,
      detail_template: this.detail_template,
      router: this.router
    });
    this.detail_holder.append(detail_view.render().el);
  }
});

app.views.CreateView = Backbone.View.extend({
  tagName: 'form',

  className: 'form-vertical well',

  events : {
    'submit': 'create'
  },

  initialize: function (options) {
    this.holder = $(options.holder);
    this.model = new options.model();
    this.create_template = $(options.create_template);
    this.router = options.router;

    this.template = _.template(this.create_template.html());

    this.constract();
  },

  constract: function () {
    this.render();
  },

  render: function () {
    this.$el.html(this.template);
    this.holder.html(this.el);
  },

  create: function (data) {
    var self = this;

    var valid = false;

    this.$el.serializeArray().forEach(function (field) {
      if (field.name === 'title') {
        if (field.value !== '') {
          self.model.set({
            title: field.value
          });
          valid = true;
        } else {
          alert('Empty Todo...');
        }
      }
    });

    if (valid) {
      self.model.save({}, {
        success: function () {
          self.router.redirect_to_list();
        }
      });
    }

    return false;
  }
});

app.views.UpdateView = Backbone.View.extend({
  tagName: 'form',

  className: 'form-vertical well',

  events : {
    'submit': 'update'
  },

  initialize: function (options) {
    this.holder = $(options.holder);
    this.pk = options.pk;
    this.model = new options.model({
      pk: this.pk
    });
    this.update_template = $(options.update_template);
    this.router = options.router;

    this.template = _.template(this.update_template.html());

    this.constract();
  },

  constract: function () {
    var self = this;

    this.model.fetch({
      success: function () {
        self.render();
      }
    });
  },

  render: function () {
    this.$el.html(this.template(this.model.attributes));
    this.holder.html(this.el);
  },

  update: function (data) {
    var self = this;

    var valid = false;

    this.$el.serializeArray().forEach(function (field) {
      if (field.name === 'title') {
        if (field.value !== '') {
          self.model.set({
            title: field.value
          });
          valid = true;
        } else {
          alert('Empty Todo...');
        }
      }
    });

    if (valid) {
      self.model.save({}, {
        success: function () {
          self.router.redirect_to_list();
        }
      });
    }

    return false;
  }
});
