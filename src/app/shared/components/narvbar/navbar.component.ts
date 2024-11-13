import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenubarModule, ButtonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Inicio',
        icon: 'pi pi-fw pi-home',
        routerLink: '/home'
      },
      {
        label: 'Test',
        icon: 'pi pi-fw pi-pencil',
        routerLink: '/home'
      },
      {
        label: 'Universidades',
        icon: 'pi pi-fw pi-graduation-cap',
        routerLink: '/home'
      },
      {
        label: 'Comunidad',
        icon: 'pi pi-fw pi-users',
        routerLink: '/home'
      },
      {
        label: 'Citas',
        icon: 'pi pi-fw pi-calendar',
        routerLink: '/home'
      },
      {
        label: 'Perfil',
        icon: 'pi pi-fw pi-user',
        items: [
          { label: 'Ver perfil', icon: 'pi pi-fw pi-eye', routerLink: '/profile/view' },
          { label: 'Editar perfil', icon: 'pi pi-fw pi-pencil', routerLink: '/profile/edit' }
        ]
      },
      {
        label: 'Configuración',
        icon: 'pi pi-fw pi-cog',
        routerLink: '/settings'
      }
    ];
  }

  logout() {
    console.log("Logout clicked");
  }
}
