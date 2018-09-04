from django.shortcuts import render, get_object_or_404
from django.utils import timezone
from .models import Post
# Create your views here.
def post_list(request):
	post_list= Post.objects.all()
	return render(request,'post/post_list.html',{'post_list':post_list,})
def post_detail(request, pk):
	post = get_object_or_404(Post, pk=pk)
	return render(request,'post/post_detail.html',{'post':post})   