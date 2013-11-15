django-backbone-todo
====================

:info: Just one more Django + Backbone + MongoDB Todo application on steroids

A `demo <http://django-backbone-todo.herokuapp.com/>`_ is available on `heroku.com <https://www.heroku.com/>`_

Features
********

* `Backbone <http://backbonejs.org/>`_ singlepage todo application with `REST <http://en.wikipedia.org/wiki/Representational_state_transfer>`_ based `Django <https://www.djangoproject.com/>`_ backend
* `Cross-Site-Request-Forgery <https://docs.djangoproject.com/en/1.5/ref/contrib/csrf/>`_ support for `Backbone <http://backbonejs.org/>`_
* `Mongoengine <http://mongoengine.org/>`_ support for `Django-REST-framework <http://django-rest-framework.org/>`_
* `Ujson <https://pypi.python.org/pypi/ujson>`_ as `Json <http://en.wikipedia.org/wiki/JSON>`_ renderer
* `Werkgeuz <http://werkzeug.pocoo.org/>`_ as heroku static files handler

Usage
*****

Local copy
----------

install and run `MongoDB <http://www.mongodb.org/>`_

.. code-block:: console

    git clone https://github.com/hellysmile/django-backbone-todo.git
    cd django-backbone-todo
    virtualenv env
    source env/bin/activate
    pip install -r requirements.txt
    python manage.py syncdb
    python manage.py migrate
    python manage.py runserver

Heroku copy
-----------

.. code-block:: console

    git clone https://github.com/hellysmile/django-backbone-todo.git
    cd django-backbone-todo
    git remote add heroku <your heroku repository>
    heroku addons:add mongolab
    git push heroku master
    heroku run python manage.py syncdb
    heroku run python manage.py migrate
    heroku open
