from django.shortcuts import redirect

from os import getenv

from django.core.mail import send_mail
from django.conf import settings
from django.http import HttpResponse

def redirect_to_admin(request):
    return redirect('/admin/')

def enviar_email(request):
    subject = 'Assunto do E-mail'
    message = 'Conteúdo do e-mailooooooooooooooooo'
    email_from = settings.EMAIL_HOST_USER
    recipient_list = []
    
    send_mail(subject, message, email_from, recipient_list)
    
    return HttpResponse("E-mail enviado com sucesso!")