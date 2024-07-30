import json
from django.shortcuts import render, get_object_or_404, redirect
from django.http import HttpResponseRedirect, JsonResponse
import json
from django.shortcuts import render, get_object_or_404, redirect
from django.http import HttpResponseRedirect, JsonResponse
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import ensure_csrf_cookie
from django.urls import reverse 
from core.models import Quests, User_Quest, Friends
from core.models import Quests
from core.models import Quests, User_Quest, UserProfile
from django.contrib.auth.forms import UserCreationForm 
from django.contrib.auth import login, logout
from django.views.decorators.csrf import ensure_csrf_cookie
from django.core import serializers
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

@login_required
def questVerification(request, id):
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
def allUserQuests(request):
   #user_quests = User_Quest.objects.filter(user_id=request.user.id, status=0).values('quest_id', 'status') 
   user_quests = User_Quest.objects.filter(user_id=request.user.id, status=0).prefetch_related('quest_id')
   quests_data = []
   for user_quest in user_quests:
        quests_data.append({
            'quest_id': user_quest.quest_id.quest_id,
            'name': user_quest.quest_id.name,
            'points': user_quest.quest_id.quest_points
        })
   return JsonResponse((quests_data), safe=False)

@login_required
def displayFriendList(request):
   return render(request, 'index.html')

@login_required
def displayUserQuests(request):
   return render(request, 'index.html')

@login_required
def completeUserQuest(request):
    if not request.method == "POST": 
        return JsonResponse({'message': 'Bad request'}, status=400)
    body = json.loads(request.body.decode('utf-8'))
    
    quest_id = body["quest_id"]
    user_id = body["user_id"]
    user_quest = get_object_or_404(User_Quest, user_id=user_id, quest_id=quest_id)
    if user_id == request.user.id and not request.user.is_superuser:
        return JsonResponse({'message': 'You cannot verify your own requests unless you are admin'}, status=401)
    user_quest.status = 1 #set status = 1 to signify completion
    user_quest.save()

    quest = get_object_or_404(Quests, quest_id=quest_id)
    points = quest.quest_points

    user = User.objects.filter(id=request.user.id).get()
    profile = UserProfile.objects.get(user_id=user_id)
    profile_points = int(profile.points)
    profile.points = str(profile_points + points) # profile points are in str and quest points are int
    profile.save()
    print(profile_points)
    # profile.points = profile.points += quest.pointså

    return JsonResponse({'status': 'success', 'quest_id': quest_id})

@login_required
def cancelUserQuest(request, quest_id):
    user_quest = get_object_or_404(User_Quest, user_id=request.user.id, quest_id=quest_id)
    User_Quest.delete(user_quest)
    return JsonResponse({'status': 'success', 'quest_id': quest_id})

def getCompletedQuests(request):
    user_quests = User_Quest.objects.filter(user_id=request.user, status=1).values_list("quest_id")
    data = Quests.objects.filter(quest_id__in = user_quests).values()
    return JsonResponse({
        "quests": list(data)
    })


@login_required
def addFriend(request):

    if request.method == "POST": 
        data = json.loads(request.body)
        username = data.get('username') #Username of who you're trying to friend
        checkUsername = User.objects.filter(username=username).exists()
        if(checkUsername == False): return JsonResponse({"message": "Username Does Not Exist" })

        friend = User.objects.get(username=username)
        checkFriend = Friends.objects.filter(user1_id=request.user, user2_id = friend).exists()
        if(checkFriend == True): return JsonResponse({"message": "Already Friends" }) #Check if already friends

        addFriend = Friends.objects.create(user1_id=request.user, user2_id = friend) #Add friend after checking cases
        return JsonResponse({"message": "Added Friend" })


@login_required
def removeFriend(request):

    if request.method == "POST": 
        data = json.loads(request.body)
        username = data.get('username') #Username of who you're trying to remove
        try:
            # Get the user object for the friend to be removed
            friend = User.objects.get(username=username)
        except User.DoesNotExist:
            return JsonResponse({"message": "Username Does Not Exist" })
        
        friendRelationship = Friends.objects.filter(user1_id=request.user, user2_id = friend)
        friendRelationship.delete()
        return JsonResponse({"message": "Friend Deleted" })




@login_required
def getFriends(request):
    friends = Friends.objects.filter(user1_id=request.user).prefetch_related('user1_id')
    friend_names = []

    for friend in friends:
        friend_names.append({
            'friend_name': friend.user2_id.username,
        })
    return JsonResponse((friend_names), safe=False)




@login_required
def acceptQuest(request):
    new_body = json.loads(request.body.decode('utf-8'))
    testcheck = User_Quest.objects.filter(user_id=request.user, quest_id=new_body["quest_id"]).exists()
    if testcheck:
        return JsonResponse({
            "message": "This quest has already been accepted!"
        })
    ongoingQuests = User_Quest.objects.filter(user_id=request.user, status=0).values()
    if ongoingQuests.count() >= 3:
        return JsonResponse({
            "message": "You cannot accept anymore quests!"
        })
    questCount = User_Quest.objects.filter(quest_id=new_body["quest_id"]).values()
    # For now, each quests' size_limit is 10 people max
    if questCount.count() >= 10:
        return JsonResponse({
            "message": "This quest cannot accept anymore users!"
        })
    new_quest = User_Quest(user_id=request.user, quest_id_id=new_body["quest_id"], completion_date="", status=0)
    new_quest.save()
    return JsonResponse({
        "message": "Quest accepted!"
    }) 

@login_required
def sendQuestToVerify(request, quest_id):
    user_quest = get_object_or_404(User_Quest, user_id=request.user.id, quest_id=quest_id)
    user_quest.status = 2
    user_quest.save()
    return JsonResponse({'status': 'success', 'quest_id': quest_id})

@login_required
def getQuestInfo(request):
    quest_id = request.GET.get('quest_id')
    user_quest = get_object_or_404(User_Quest, user_id=request.user.id, quest_id=quest_id)
    quest = user_quest.quest_id
    return JsonResponse({
        'quest_id': quest_id,
        'name': quest.name,
        'points': quest.quest_points
        })

@login_required
def getQuestsToBeVerified(request):
    user_quests = User_Quest.objects.filter(status=2)
    
    data=[]
    for user_quest in user_quests:
        quest = user_quest.quest_id 
        data.append({
            "username": user_quest.user_id.username,
            "user_id": user_quest.user_id.id,
            "quest_id": quest.quest_id,
            "name": quest.name,
            "points": quest.quest_points,
        })
    return JsonResponse({
        "quests": list(data)
    })

@login_required
def cancelQuestVerification(request):
    if not request.user.is_superuser:
        return JsonResponse({'message': 'You need to be admin to perform this action'}, status=401)
    if not request.method == "POST": 
        return JsonResponse({'message': 'Bad request'}, status=400)
    body = json.loads(request.body.decode('utf-8'))
    quest_id = body["quest_id"]
    user_id = body["user_id"]
    user_quest = get_object_or_404(User_Quest, user_id=user_id, quest_id=quest_id)
    User_Quest.delete(user_quest)
    return JsonResponse({'status': 'success', 'quest_id': quest_id})

