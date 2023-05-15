import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private renderComponentSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private renderComponent$: Observable<boolean> = this.renderComponentSubject.asObservable();

  constructor() { }

  shouldRenderComponent(): Observable<boolean> {
    return this.renderComponent$;
  }

  setRenderComponent(render: boolean): void {
    this.renderComponentSubject.next(render);
  }
}
