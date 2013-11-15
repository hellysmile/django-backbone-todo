from mongoengine import Document, StringField, BooleanField


class Todo(Document):
    title = StringField(required=True)

    done = BooleanField(required=True)

    def __unicode__(self):
        return self.title
