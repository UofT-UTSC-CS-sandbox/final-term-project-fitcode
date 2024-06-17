from django.contrib import admin
from django.urls import path
from core import views

app_name='core'

urlpatterns = [
    path("", views.index, name="home"),
    path("profile/", views.profile, name="profile"),
    path("quests/", views.quests, name="quests"),
    path("select/", views.select, name="select"),
    path("profile_data/", views.profileData, name="profile_data"),
    path("available_quests/", views.availableQuests, name="available_quests")
]