from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User, Thread, Message

admin.site.register(User, UserAdmin)
admin.site.register(Thread)
admin.site.register(Message)
