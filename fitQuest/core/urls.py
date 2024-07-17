from django.contrib import admin
from django.urls import path
from core import views

app_name='core'

urlpatterns = [
    path("", views.index, name="home"),
    path("profile/", views.profile, name="profile"),
    path("quests/", views.quests, name="quests"),
    path("select/", views.select, name="select"),
    path("completed_quests/", views.index, name="completed_quests"),
    path("profile_data/", views.profileData, name="profile_data"),
    path("available_quests/", views.availableQuests, name="available_quests"),
    path("accounts/register/", views.register, name="register"),
    path("get_completed_quests/", views.getCompletedQuests, name="get_completed_quests"),
    path("quests/accept", views.acceptQuest, name="accept_quest"),
    path('ongoing_quests/', views.displayUserQuests, name='ongoing_quests'),
    path('ongoing_quest_list/', views.allUserQuests, name='ongoing_quest_list'),
    path('cancel_ongoing_quest/<quest_id>', views.cancelUserQuest, name='cancel_ongoing_quest'),
    path('complete_user_quest/<quest_id>/', views.completeUserQuest, name = 'complete_user_quest'),
    path("get_completed_quests/", views.getCompletedQuests, name="get_completed_quests"),
    path("friend_list/", views.displayFriendList, name="display_friend_list")
]