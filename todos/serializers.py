from rest_framework import serializers

from .models import Todo as TodoOrm
from .documents import Todo as TodoOdm


class TodoOrmSerializer(serializers.Serializer):
    instance = TodoOrm

    pk = serializers.Field()

    title = serializers.CharField(
        required=True,
        max_length=256
    )

    done = serializers.BooleanField()

    def restore_object(self, attrs, instance=None):
        if instance:
            instance.title = attrs.get('title', instance.title)
            instance.done = attrs.get('done', instance.done)
            return instance

        return self.instance(**attrs)


class TodoOdmSerializer(TodoOrmSerializer):
    instance = TodoOdm
