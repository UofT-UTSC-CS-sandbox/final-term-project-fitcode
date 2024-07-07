import json
from django.shortcuts import render
from django.http import HttpResponseRedirect, JsonResponse
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import ensure_csrf_cookie
from django.urls import reverse 
from core.models import Quests, User_Quest, UserProfile
from django.contrib.auth.forms import UserCreationForm 
from django.contrib.auth import login, logout
from django.views.decorators.csrf import ensure_csrf_cookie
from django.core import serializers

# Create your views here.

# for testing
@login_required
def index(request):
    return render(request, "index.html")

@login_required
def profile(request):
    return render(request, "index.html")

@login_required
def quests(request):
    return render(request, "index.html")

@login_required
def select(request):
    return render(request, "index.html")

@ensure_csrf_cookie
def register(request):
    # check if user is already logged in
    if request.user.is_authenticated:
        return HttpResponseRedirect(reverse('core:home'))
    
    if request.method == "POST": 
        form = UserCreationForm(request.POST) 
        if form.is_valid(): 
            user = form.save()
            login(request, form.save())
            profile = UserProfile.objects.create(user=user, points=0)
            return HttpResponseRedirect(reverse("core:home"))
    else:
        form = UserCreationForm()
    return render(request, "registration/register.html", {"form": form})

@login_required
def profileData(request):
    user = User.objects.filter(id=request.user.id).get()
    profile = user.userprofile
    return JsonResponse({
        "username": user.username,
        "points": profile.points
    })

@login_required
def availableQuests(request):
    quest_type = request.GET.get('type')
    availableQuests = Quests.objects.filter(available=True, target_area=quest_type).values('quest_id', 'target_area', 'name', 'description', 'quest_points')
    return JsonResponse(list(availableQuests), safe=False)

@login_required
def getCompletedQuests(request):
    user_quests = User_Quest.objects.filter(user_id=request.user, status=1).values_list("quest_id")
    data = Quests.objects.filter(quest_id__in = user_quests).values()
    return JsonResponse({
        "quests": list(data)
    })

@login_required
def acceptQuest(request):
    new_body = json.loads(request.body.decode('utf-8'))
    testcheck = User_Quest.objects.filter(user_id=request.user, quest_id=new_body["quest_id"]).exists()
    print(testcheck)
    if not testcheck:
        new_quest = User_Quest(user_id=request.user, quest_id_id=new_body["quest_id"], completion_date="", status=0)
        new_quest.save()
        return JsonResponse({
            "message": "Quest accepted!"
        })
    else:
        return JsonResponse({
            "message": "This quest has already been accepted!"
        })