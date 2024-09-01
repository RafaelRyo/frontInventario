import { InventarioService } from './../../services/inventario.service';
import { InventarioModel } from './../../models/inventario.model';
import { ProductoService } from './../../services/producto.service';
import { Component, OnInit } from '@angular/core';
import { ProductoModel } from 'src/app/models/producto.model';

@Component({
  selector: 'app-registrar-inventario',
  templateUrl: './registrar-inventario.component.html',
  styleUrls: ['./registrar-inventario.component.css'],
})
export class RegistrarInventarioComponent implements OnInit {
  productos: ProductoModel[] = [];

  inventario: InventarioModel = {
    nombreUsuario: '',
    producto: '',
    numeroSerie: '',
    fechaRegistro: '',
    estado: 'Entregar',
  };

  constructor(
    private productoService: ProductoService,
    private inventarioService: InventarioService
  ) {}

  ngOnInit(): void {
    this.productoService.obtenerProductos().subscribe((data) => {
      this.productos = data;
    });
  }

  onSubmit(): void {
    this.inventarioService.registrarInventario(this.inventario).subscribe(
      (response) => {
        console.log('Inventario registrado', response);

        this.inventario = {
          nombreUsuario: '',
          producto: '',
          numeroSerie: '',
          fechaRegistro: '',
          estado: 'Entregar',
        };
      },
      (error) => {
        console.error('Error registrado inventario', error);
      }
    );
  }
}
