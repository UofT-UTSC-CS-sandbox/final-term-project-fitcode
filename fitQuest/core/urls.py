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
    path("available_quests/", views.availableQuests, name="available_quests"),
    path("accounts/register/", views.register, name="register"),
    path("quests/accept", views.acceptQuest, name="accept_quest"),
    path('ongoing_quests/', views.displayUserQuests, name='ongoing_quests'),
    path("quests_to_be_verified", views.index, name="quests_to_be_verified"),

    # API
    path("profile_data/", views.profileData, name="profile_data"),
    path("get_completed_quests/", views.getCompletedQuests, name="get_completed_quests"),
    path("get_quests_to_be_verified", views.getQuestsToBeVerified, name="quests_to_be_verified_list"),
    path('complete_user_quest/<quest_id>/', views.completeUserQuest, name = 'complete_user_quest'),
    path('cancel_quest_verification/', views.cancelQuestVerification, name = 'cancel_quest_verification'),
    path('cancel_quest_verification/', views.cancelQuestVerification, name = 'cancel_quest_verification'),
    path('cancel_ongoing_quest/<quest_id>', views.cancelUserQuest, name='cancel_ongoing_quest'),
    path('ongoing_quest_list/', views.allUserQuests, name='ongoing_quest_list'),
    path("send_quest_to_verify/<quest_id>", views.sendQuestToVerify, name="send_quest_to_verify"),
]