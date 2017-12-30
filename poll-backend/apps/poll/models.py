from django.db import models


class Question(models.Model):
    text = models.CharField(max_length=400)


class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE, related_name="choices", blank=True)
    text = models.CharField(max_length=200)
    votes = models.PositiveIntegerField(default=0)
