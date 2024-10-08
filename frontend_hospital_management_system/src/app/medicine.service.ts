import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medicine } from './medicine';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private httpClient:HttpClient) { }
  private baseUrl="http://localhost:8080/api/v3";

  getMedicines():Observable<Medicine[]> {
    return this.httpClient.get<Medicine[]>(`${this.baseUrl}`);
  }
}
