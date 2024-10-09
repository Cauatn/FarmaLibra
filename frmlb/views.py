from django.shortcuts import redirect

from os import getenv

from django.core.mail import send_mail
from django.conf import settings
from django.http import HttpResponse,JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

def redirect_to_admin(request):
    return redirect('/admin/')

@csrf_exempt
def enviar_email(request):
    if request.method == 'POST':
        try:
            # Ler os dados JSON do corpo da requisição
            data = json.loads(request.body)
            
            # Depuração: imprimir os dados recebidos
            print("Dados recebidosssss:", data)
            
            subject = 'Assunto do E-mail'
            message = f"Nome: {data['name']}\nEmail: {data['email']}\nSugestão: {data['suggestion']}"
            email_from = settings.EMAIL_HOST_USER
            recipient_list = ['tavarescauacdev@gmail.com']

            # Processar o vídeo se necessário
            video = data.get('video')
            if video:
                message += f"\n\nVídeo: {video}"

            # Enviar o e-mail
            send_mail(subject, message, email_from, recipient_list)
            return JsonResponse({"message": "E-mail enviado com sucesso!"})
        except Exception as e:
            # Depuração: imprimir o erro
            print("Erro ao processar a requisição:", str(e))
            return JsonResponse({"error": str(e)}, status=400)
    return HttpResponse(status=405)