from rest_framework import serializers
from .models import Empresas, Empleados

class EmpresasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empresas
        fields = '__all__'

class EmpleadosSerializer(serializers.ModelSerializer):
    empresa = EmpresasSerializer(read_only=True)
    empresa_id = serializers.PrimaryKeyRelatedField(source='empresa', queryset=Empresas.objects.all(), write_only=True)

    class Meta:
        model = Empleados
        fields = '__all__'
