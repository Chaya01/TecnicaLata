from django.urls import path
from .views import EmpresasListCreateAPIView, EmpresasDetailAPIView, EmpleadosListCreateAPIView, EmpleadosDetailAPIView

urlpatterns = [
    path('empresas/', EmpresasListCreateAPIView.as_view(), name='empresa-list-create'),
    path('empresas/<int:pk>/', EmpresasDetailAPIView.as_view(), name='empresa-detail'),
    path('empleados/', EmpleadosListCreateAPIView.as_view(), name='empleado-list-create'),
    path('empleados/<int:pk>/', EmpleadosDetailAPIView.as_view(), name='empleado-detail'),
]
