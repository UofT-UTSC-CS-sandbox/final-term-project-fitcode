from django.shortcuts import render

# Create your views here.

# for testing
def index(request):
    return render(request, "index.html")

def profile(request):
    return render(request, "index.html")

def quests(request):
    return render(request, "index.html")