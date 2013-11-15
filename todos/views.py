from django.views.generic import TemplateView
from django.core.urlresolvers import reverse_lazy
from django.views.generic.base import RedirectView


class IndexOrmTemplateView(TemplateView):
    api_endpoind = 'todos:todo_orm_list'
    template_name = 'todos/index.html'

    def get_context_data(self, **kwargs):
        context = super(IndexOrmTemplateView, self).get_context_data(**kwargs)

        context['api_endpoint'] = reverse_lazy(self.api_endpoind)

        return context


class IndexOdmTemplateView(IndexOrmTemplateView):
    api_endpoind = 'todos:todo_odm_list'


class IndexRedirectView(RedirectView):
    permanent = False
    query_string = False

    def get_redirect_url(self):
        return reverse_lazy('todos:index_orm')
