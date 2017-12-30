from django.db.models import F

from rest_framework import viewsets
from rest_framework.decorators import detail_route
from rest_framework.response import Response

from apps.poll.models import Question, Choice
from .serializers import QuestionSerializer, ChoiceSerializer


class ChoiceViewSet(viewsets.ModelViewSet):
    queryset = Choice.objects.all()
    serializer_class = ChoiceSerializer

    @detail_route(methods=["post"])
    def vote(self, request, pk=None):
        obj = self.get_object()
        obj.votes = F('votes') + 1
        obj.save()
        serializer = QuestionSerializer(obj.question)
        return Response(serializer.data)


class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
