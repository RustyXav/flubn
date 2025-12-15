import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { HotelsResult } from "../services/HotelsResult";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockData0Service {
  private http = inject(HttpClient);
  HotelsResultObservable: Observable<HotelsResult[]>;

  constructor() {
    this.HotelsResultObservable = this.http.get<HotelsResult[]>("/hotels.json");
    
  }
}
