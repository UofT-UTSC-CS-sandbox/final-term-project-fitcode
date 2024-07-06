from django.shortcuts import render
from django.http import HttpResponseRedirect, JsonResponse
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.urls import reverse 
from core.models import Quests
from django.contrib.auth.forms import UserCreationForm 
from django.contrib.auth import login, logout
from django.views.decorators.csrf import ensure_csrf_cookie

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