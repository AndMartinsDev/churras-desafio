import { Churras } from './churras.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChurrasService {

  baseUrl = "http://localhost:3001/funcionarios";

  constructor(private snackBar: MatSnackBar, private http: HttpClient ) { }

  showMensage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(churras: Churras): Observable<Churras> {
    return this.http.post<Churras>(this.baseUrl, churras);
  }

  read(): Observable<Churras[]> {
    return this.http.get<Churras[]>(this.baseUrl)
  }

  readById(id: string): Observable<Churras> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Churras>(url)
  }

  update(funcionario: Churras): Observable<Churras> {
    const url = `${this.baseUrl}/${funcionario.id}`
    return this.http.put<Churras>(url, funcionario)
  }

  delete(id: string): Observable<Churras> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Churras>(url)
  }
}