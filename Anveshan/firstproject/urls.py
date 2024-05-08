from . import views 
from django.urls import path,include  # type: ignore

urlpatterns = [
         path("", views.index, name="index2"),
         #path("login.html", views.login, name="login"),
        #path("login.html", views.login, name="login2"),
         path("home2.html", views.home, name="home2"),
         path("profile.html", views.profile, name="profile"),
        #  path("login", views.home, name="home2"),
        # path('/logins/', include("django.contrib.auth.urls")),
        # path('/logins/', include("logins.urls"))


]