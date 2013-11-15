from django.db import models
from django.utils.translation import ugettext_lazy as _


class Todo(models.Model):
    title = models.CharField(
        verbose_name=_('Title'),
        max_length=256
    )

    done = models.BooleanField(
        verbose_name=_('Done')
    )

    class Meta:
        verbose_name = _('Todo')
        verbose_name_plural = _('Todos')

    def __unicode__(self):
        return self.title
