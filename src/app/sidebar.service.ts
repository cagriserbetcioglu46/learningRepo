import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public _isSideNavbarVisible: boolean = true;

  get isSideNavbarVisible(): boolean{
    return this._isSideNavbarVisible;
  }

  toggleSideNavbar(): void{
    this._isSideNavbarVisible = !this._isSideNavbarVisible;
  }
}
