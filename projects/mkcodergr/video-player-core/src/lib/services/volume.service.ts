import { Injectable } from '@angular/core';
import {BehaviorSubject, filter, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VolumeService {
  private volume = new BehaviorSubject<number>(1);

  setVolumeValue(value: number): void {
    this.volume.next(value);
  }

  get volumeValue$(): Observable<number> {
    return this.volume.asObservable()
      .pipe(filter(e => Number.isFinite(e)));
  }
}
