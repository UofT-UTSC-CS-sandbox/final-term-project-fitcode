from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth.models import User
from matplotlib.style import available
from fitQuest.core.models import Quests

# Create your views here.

# for testing
def index(request):
    return render(request, "index.html")

def profile(request):
    return render(request, "index.html")

def quests(request):
    return render(request, "index.html")

def profileData(request):
    user = User.objects.filter(id=1).get()
    profile = user.userprofile
    return JsonResponse({
        "username": user.username,
        "points": profile.points
    })

def availableQuests(request):
    quest_type = request.GET.get('type')
    availableQuests = Quests.objects.filter(available=True, target_area=quest_type).values('quest_id', 'target_area', 'name', 'description', 'quest_points')
    return JsonResponse(list(availableQuests), safe=False)