from rest_framework import serializers

from apps.poll.models import Question, Choice


class ChoiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Choice
        fields = ["id", "text", "votes", "question_id"]


class QuestionSerializer(serializers.ModelSerializer):
    choices = ChoiceSerializer(many=True, required=False)

    def create(self, validated_data):
        q = Question.objects.create(text=validated_data["text"])

        for c in validated_data["choices"]:
            Choice.objects.create(question=q, text=c["text"])

        return q

    class Meta:
        model = Question
        fields = ["id", "text", "choices"]
