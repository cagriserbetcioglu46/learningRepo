// app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // CommonModule import edin
import { NavbarComponent } from './navbar/navbar.component';
import { LeftSideNavbarComponent } from './left-side-navbar/left-side-navbar.component';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, LeftSideNavbarComponent], // CommonModule'u buraya ekleyin
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-first-project';
  constructor(public sidebarService: SidebarService) {}
}
