web: daphne -b 0.0.0.0 -p $PORT chatapp.asgi:application
worker: python manage.py runworker channels -v2
