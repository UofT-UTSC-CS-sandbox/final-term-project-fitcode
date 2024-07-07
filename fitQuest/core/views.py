from django.shortcuts import render, get_object_or_404, redirect
from django.http import HttpResponseRedirect, JsonResponse
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.urls import reverse 
from core.models import Quests, User_Quest
from django.contrib.auth.forms import UserCreationForm 
from django.contrib.auth import login, logout

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


def register(request):
    # check if user is already logged in
    if request.user.is_authenticated:
        return HttpResponseRedirect(reverse('core:home'))
    
    if request.method == "POST": 
        form = UserCreationForm(request.POST) 
        print(form.errors)
        if form.is_valid(): 
            login(request, form.save())
            return HttpResponseRedirect(reverse("core:home"))
    else:
        form = UserCreationForm()
    return render(request, "registration/register.html", {"form": form})

@login_required
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

@login_required
def allUserQuests(request):
   
   #user_quests = User_Quest.objects.filter(user_id=request.user.id, status=0).values('quest_id', 'status') 
   user_quests = User_Quest.objects.filter(user_id=request.user.id).prefetch_related('quest_id')
   quests_data = []
   for user_quest in user_quests:
        quests_data.append({
            'quest_id': user_quest.quest_id.quest_id,
            'name': user_quest.quest_id.name,
            'points': user_quest.quest_id.quest_points
        })
   return JsonResponse((quests_data), safe=False)

@login_required
def displayUserQuests(request):
   return render(request, 'index.html')

@login_required
def cancelUserQuest(request):
    q_id = request.GET.get('quest_id')
    user_quest = get_object_or_404(User_Quest, user_id=request.user.id, quest_id=q_id)
    user_quests = User_Quest.delete(user_quest)
    return JsonResponse(list(user_quests), safe=False)

