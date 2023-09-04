from django.shortcuts import render, redirect
# from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages
from . forms import UserRegisterForm

# Create your views here.
def main(request):
    return render(request, 'users/home.html')


def register(request):
    if request.method == 'POST':
        # form =  form = UserCreationForm(request.POST)
        form =  form = UserRegisterForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            # username = request.POST['usernmae']
            messages.success(request, f"Account Created for {username}!")
            return redirect('/')
            
    else:
        messages.info(request, 'error')
        # form = UserCreationForm()
        form = UserRegisterForm()
   
    return render(request, 'users/register.html', {'form':form})


