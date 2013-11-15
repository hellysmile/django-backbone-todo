Backbone._sync = Backbone.sync;

Backbone.sync = function (method, model, options) {
  if (method === 'create' || method === 'update' || method === 'delete') {
    var csrfToken = $('meta[name="csrf-token"]').attr('content');

    options.beforeSend = function (xhr) {
      xhr.setRequestHeader('X-CSRFToken', csrfToken);
    };
  }

  return Backbone._sync(method, model, options);
};
