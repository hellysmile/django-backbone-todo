from django.shortcuts import get_object_or_404
from mongoengine.django.shortcuts import get_document_or_404
from rest_framework.generics import (
    ListCreateAPIView, RetrieveUpdateDestroyAPIView
)
from rest_framework.renderers import BrowsableAPIRenderer

from .models import Todo as TodoOrm
from .documents import Todo as TodoOdm
from .serializers import TodoOrmSerializer, TodoOdmSerializer
from .renderers import UJSONRenderer


class ApiRenderer(object):
    renderer_classes = (UJSONRenderer, BrowsableAPIRenderer)


class ApiTodoOrmSerializer(object):
    serializer_class = TodoOrmSerializer


class ApiTodoOdmSerializer(object):
    serializer_class = TodoOdmSerializer


class TodoOrmListCreateAPIView(
    ApiRenderer, ApiTodoOrmSerializer, ListCreateAPIView
):
    def get_queryset(self):
        return TodoOrm.objects.all()


class TodoOrmRetrieveUpdateDestroyAPIView(
    ApiRenderer, ApiTodoOrmSerializer, RetrieveUpdateDestroyAPIView
):
    serializer_class = TodoOrmSerializer

    def get_object(self, queryset=None):
        pk = self.kwargs.get('pk')

        return get_object_or_404(TodoOrm, pk=pk)


class TodoOdmListCreateAPIView(
    ApiRenderer, ApiTodoOdmSerializer, ListCreateAPIView
):
    serializer_class = TodoOdmSerializer

    def get_queryset(self):
        return TodoOdm.objects.all()


class TodoOdmRetrieveUpdateDestroyAPIView(
    ApiRenderer, ApiTodoOdmSerializer, RetrieveUpdateDestroyAPIView
):
    serializer_class = TodoOdmSerializer

    def get_object(self, queryset=None):
        pk = self.kwargs.get('pk')

        return get_document_or_404(TodoOdm, pk=pk)
