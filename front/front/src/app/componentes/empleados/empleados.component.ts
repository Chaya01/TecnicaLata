import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../../servicios/empleados.service';
import { EmpresasService } from '../../servicios/empresas.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  empleados: any[] = [];
  empresas: any[] = [];
  newEmpleado: any = { nombre_empleado: '', apellido_empleado: '', rut_empleado: '', email: '', empresa: null };
  editEmpleadoData: any = null;

  constructor(private empleadosService: EmpleadosService, private empresasService: EmpresasService) { }

  ngOnInit(): void {
    this.loadEmpleados();
    this.loadEmpresas();
  }

  loadEmpleados() {
    this.empleadosService.getEmpleados().subscribe(data => {
      this.empleados = data;
    });
  }

  loadEmpresas() {
    this.empresasService.getEmpresas().subscribe(data => {
      this.empresas = data;
    });
  }

  addEmpleado() {
    if (this.editEmpleadoData) {
      this.updateEmpleado();
    } else {
      this.empleadosService.addEmpleado(this.newEmpleado).subscribe(data => {
        this.loadEmpleados();
        this.newEmpleado = { nombre_empleado: '', apellido_empleado: '', rut_empleado: '', email: '', empresa: null };
      });
    }
  }

  editEmpleado(empleado: any) {
    this.editEmpleadoData = { ...empleado };
    this.newEmpleado = { ...empleado, empresa: empleado.empresa.id };
  }

  updateEmpleado() {
    this.empleadosService.updateEmpleado(this.editEmpleadoData.id, this.newEmpleado).subscribe(data => {
      this.loadEmpleados();
      this.newEmpleado = { nombre_empleado: '', apellido_empleado: '', rut_empleado: '', email: '', empresa: null };
      this.editEmpleadoData = null;
    });
  }

  deleteEmpleado(id: number) {
    this.empleadosService.deleteEmpleado(id).subscribe(data => {
      this.loadEmpleados();
    });
  }
}
