from django.contrib import admin
from django.urls import path
from core import views

app_name='core'

urlpatterns = [
    path("index/", views.index, name="index"),
    path("profile/", views.profile, name="profile"),
    path("quests/", views.quests, name="quests"),

    path("profile_data/", views.profileData, name="profile_data"),

]