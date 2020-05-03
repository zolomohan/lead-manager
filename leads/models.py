from django.db import models
from django.contrib.auth.models import User


class Lead(models.Model):
    owner = models.ForeignKey(
        User, related_name='leads', on_delete=models.CASCADE, null=True)
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    message = models.TextField(max_length=500, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['owner', 'email'], name='Unique Email Associated With User')
        ]