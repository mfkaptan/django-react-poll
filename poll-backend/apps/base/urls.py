from django.conf.urls import url, include

from rest_framework import routers

from apps.poll.api import view_sets as poll_viewsets
from .views import home


router = routers.DefaultRouter()
router.register(r'polls', poll_viewsets.QuestionViewSet)
router.register(r'choices', poll_viewsets.ChoiceViewSet)

urlpatterns = [
    url(r'^$', home, name='home'),
    url(r'^api/v1/', include(router.urls))
]
