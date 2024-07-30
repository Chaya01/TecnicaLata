from django.http import Http404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Empresas, Empleados
from .serializers import EmpresasSerializer, EmpleadosSerializer

class EmpresasListCreateAPIView(APIView):
    def get(self, request):
        empresas = Empresas.objects.all()
        serializer = EmpresasSerializer(empresas, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = EmpresasSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class EmpresasDetailAPIView(APIView):
    def get_object(self, pk):
        try:
            return Empresas.objects.get(pk=pk)
        except Empresas.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        empresa = self.get_object(pk)
        serializer = EmpresasSerializer(empresa)
        return Response(serializer.data)

    def put(self, request, pk):
        empresa = self.get_object(pk)
        serializer = EmpresasSerializer(empresa, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        empresa = self.get_object(pk)
        empresa.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class EmpleadosListCreateAPIView(APIView):
    def get(self, request):
        empleados = Empleados.objects.all()
        serializer = EmpleadosSerializer(empleados, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = EmpleadosSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class EmpleadosDetailAPIView(APIView):
    def get_object(self, pk):
        try:
            return Empleados.objects.get(pk=pk)
        except Empleados.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        empleado = self.get_object(pk)
        serializer = EmpleadosSerializer(empleado)
        return Response(serializer.data)

    def put(self, request, pk):
        empleado = self.get_object(pk)
        serializer = EmpleadosSerializer(empleado, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        empleado = self.get_object(pk)
        empleado.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
