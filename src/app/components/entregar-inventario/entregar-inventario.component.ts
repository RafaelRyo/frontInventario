import { InventarioService } from './../../services/inventario.service';
import { Component, OnInit } from '@angular/core';
import { InventarioModel } from 'src/app/models/inventario.model';

@Component({
  selector: 'app-entregar-inventario',
  templateUrl: './entregar-inventario.component.html',
  styleUrls: ['./entregar-inventario.component.css'],
})
export class EntregarInventarioComponent implements OnInit {
  inventarios: InventarioModel[] = [];

  constructor(private inventarioService: InventarioService) {}

  ngOnInit(): void {
    this.inventarioService.obtenerInventarios().subscribe((data) => {
      this.inventarios = data;
    });
  }

  entregarInventario(inventario: InventarioModel): void {
    this.inventarioService
      .entregarInventario(inventario.id!, 'Entregado')
      .subscribe(
        (response) => {
          console.log('Inventario actualizado', response);
          inventario.estado = 'Entregado';
        },
        (error) => {
          console.error('Error actualizando inventario', error);
        }
      );
  }
}
