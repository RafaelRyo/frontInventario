import { InventarioModel } from './../models/inventario.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  private apiUrl= 'http://localhost:8080/api/inventario';
  private apuUrlEntregar= 'http://localhost:8080/api/inventario/actualizar-estado/${id}';

  constructor(private http: HttpClient) { }

  obtenerInventarios(): Observable<InventarioModel[]>{
    return this.http.get<InventarioModel[]>(this.apiUrl);
  }

  registrarInventario(inventario: InventarioModel): Observable<InventarioModel> {
    return this.http.post<InventarioModel>(`${this.apiUrl}/registrar`, inventario);
  }

  entregarInventario(id: string, estado: string): Observable<InventarioModel> {
    const params = new HttpParams().set('estado', estado) 
    return this.http.put<InventarioModel>(`http://localhost:8080/api/inventario/actualizar-estado/${id}`, {}, { params });
  }
}
