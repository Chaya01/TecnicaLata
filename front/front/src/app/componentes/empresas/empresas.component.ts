import { Component, OnInit } from '@angular/core';
import { EmpresasService } from '../../servicios/empresas.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-empresas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {
  empresas: any[] = [];
  newEmpresa: any = {};
  editEmpresaData: any;

  constructor(private empresasService: EmpresasService) { }

  ngOnInit(): void {
    this.getEmpresas();
  }

  getEmpresas(): void {
    this.empresasService.getEmpresas().subscribe((data: any) => {
      this.empresas = data;
    });
  }

  addEmpresa(): void {
    if (this.editEmpresaData) {
      this.empresasService.updateEmpresa(this.editEmpresaData.id, this.newEmpresa).subscribe(() => {
        this.getEmpresas();
        this.newEmpresa = {};
        this.editEmpresaData = null;
      });
    } else {
      this.empresasService.createEmpresa(this.newEmpresa).subscribe(() => {
        this.getEmpresas();
        this.newEmpresa = {};
      });
    }
  }

  editEmpresa(empresa: any): void {
    this.editEmpresaData = empresa;
    this.newEmpresa = { ...empresa };
  }

  deleteEmpresa(id: number): void {
    this.empresasService.deleteEmpresa(id).subscribe(() => {
      this.getEmpresas();
    });
  }
}
