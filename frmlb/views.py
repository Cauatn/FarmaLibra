from django.shortcuts import redirect

from os import getenv

def redirect_to_admin(request):
    return redirect('/admin/')