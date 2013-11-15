from django.conf.urls import patterns, url


from .views import (
    IndexOrmTemplateView, IndexOdmTemplateView, IndexRedirectView
)
from .api import (
    TodoOrmListCreateAPIView, TodoOrmRetrieveUpdateDestroyAPIView,
    TodoOdmListCreateAPIView, TodoOdmRetrieveUpdateDestroyAPIView
)


urlpatterns = patterns(
    '',

    url(
        r'^api/orm/$',
        TodoOrmListCreateAPIView.as_view(),
        name='todo_orm_list'
    ),

    url(
        r'^api/orm/(?P<pk>[0-9]+)/$',
        TodoOrmRetrieveUpdateDestroyAPIView.as_view(),
        name='todo_orm_item'
    ),

    url(
        r'^api/odm/$',
        TodoOdmListCreateAPIView.as_view(),
        name='todo_odm_list'
    ),

    url(
        r'^api/odm/(?P<pk>[0-9a-f]{24})/$',
        TodoOdmRetrieveUpdateDestroyAPIView.as_view(),
        name='todo_odm_item'
    ),

    url(
        r'^orm/$',
        IndexOrmTemplateView.as_view(), name='index_orm'
    ),

    url(
        r'^odm/$',
        IndexOdmTemplateView.as_view(), name='index_odm'
    ),

    url(
        r'^$',
        IndexRedirectView.as_view(), name='index'
    )
)
