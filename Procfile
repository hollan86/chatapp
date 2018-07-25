web: gunicorn chatapp.wsgi --log-file -
web2: daphne -p $PORT chatapp.asgi:application
worker: python manage.py runworker -v2
