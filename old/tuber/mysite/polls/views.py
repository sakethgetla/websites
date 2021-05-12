from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse

def index(request):
    return HttpResponse("Hekko")

def details(request, question_id):
    return HttpResponse("you r looking at the question %s" % question_id)

def results(request, question_id):
    return HttpResponse("you r looking at the results of question %s" % question_id)

def vote(request, question_id):
    return HttpResponse("you r voting on question %s" % question_id)
