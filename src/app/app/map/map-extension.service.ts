import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapExtensionService {
visibility = new Subject<boolean>();
  constructor() { }


public getVisibility(): Observable<boolean>{
  return this.visibility.asObservable();
}
public changeVisibility(value: boolean): void {
  this.visibility.next(value);
}}
