from django.shortcuts import render # type: ignore

def index(request):
    context={}
    return render(request,"firstproject/index2.html", context)

#def login(request):
   # context={}
    #return render(request,"firstproject/registration/login.html",context)

def home(request):
    context={}
    return render(request,"firstproject/home2.html",context)

def profile(request):
    context={}
    return render(request,"firstproject/profile.html",context)
from django.middleware.csrf import rotate_token # type: ignore

def my_view(request):
    if request.method == 'POST':
        # Verify CSRF token
        if not request.POST.get('csrfmiddlewaretoken') == request.COOKIES['csrftoken']:
            # Handle CSRF verification failure
            return HttpResponseForbidden('CSRF verification failed') # type: ignore

        # CSRF verification passed, process the form
        # Remember to rotate the CSRF token if needed
        rotate_token(request)
        # Process form submission
    else:
        # Handle other HTTP methods like GET
        pass