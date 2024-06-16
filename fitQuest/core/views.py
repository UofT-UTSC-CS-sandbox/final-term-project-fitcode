from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth.models import User


# Create your views here.

# for testing
def index(request):
    return render(request, "index.html")

def profile(request):
    return render(request, "index.html")

def quests(request):
    return render(request, "index.html")

def select(request):
    return render(request, "index.html")

def profileData(request):
    user = User.objects.filter(id=1).get()
    profile = user.userprofile
    return JsonResponse({
        "username": user.username,
        "points": profile.points
    })