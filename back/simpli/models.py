from django.db import models

class Empresas(models.Model):
    nombre_empresa = models.CharField(max_length=100, verbose_name='Nombre')
    rut_empresa = models.CharField(max_length=100, verbose_name='Rut')
    direccion_empresa = models.CharField(max_length=100, verbose_name='Direccion')
    telefono_empresa = models.CharField(max_length=30, verbose_name='Telefono')

    class Meta:
        ordering = ['rut_empresa']
        verbose_name = 'Empresas'
    
    def __str__(self):
        return self.nombre_empresa

class Empleados(models.Model):
    nombre_empleado = models.CharField(max_length=100, verbose_name='Nombre')
    apellido_empleado = models.CharField(max_length=100, verbose_name='Apellido')
    rut_empleado = models.CharField(max_length=30, verbose_name='Rut')
    email = models.EmailField()
    empresa = models.ForeignKey(Empresas, on_delete=models.CASCADE, verbose_name='Empresa')

    class Meta:
        ordering = ['rut_empleado']
        verbose_name = 'Empleados'

    def __str__(self):
        return self.nombre_empleado
