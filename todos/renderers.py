import ujson

from rest_framework.renderers import JSONRenderer


class UJSONRenderer(JSONRenderer):
    format = 'json'
    ensure_ascii = False

    def render(self, data=None, *kwargs):
        if data is None:
            data = {}

        ret = ujson.dumps(
            data, ensure_ascii=self.ensure_ascii
        )

        return ret
