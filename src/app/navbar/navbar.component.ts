import { Component } from '@angular/core';
import { SidebarService } from '../sidebar.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  
 constructor(private sidebarService: SidebarService) {}
  
  toggleSideNavbar() {
    this.sidebarService.toggleSideNavbar();
  }


}

