from rest_framework import viewsets, permissions
from leads.serializer import LeadSerializer
from leads.models import Lead

class LeadViewSet(viewsets.ModelViewSet):
    serializer_class = LeadSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]
    
    def get_queryset(self):
        self.request.user.leads.all()

    def perform_create(self, serializer):
        serializer.save(owner = self.request.user)
