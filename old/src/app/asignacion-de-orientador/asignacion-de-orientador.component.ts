import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Session {
  id: number;
  studentName: string;
  date: Date;
  type: 'Académica' | 'Vocacional' | 'Personal';
  duration: number;
}

@Component({
  styleUrl: './asignacion-de-orientador.component.css',
  selector: 'app-session-card',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="card">
    <div class="session-time">
      {{ session.date | date:'EEEE d MMMM, h:mm a' }}
    </div>
    <div class="student-name">
      {{ session.studentName }}
    </div>
    <div>
      <span class="session-type">{{ session.type }}</span>
      <span class="duration">{{ session.duration }} minutos</span>
    </div>
  </div>
`
})
export class SessionCardComponent {
  @Input() session!: Session;
}

@Component({
  styleUrl: './asignacion-de-orientador.component.css',
  selector: 'app-sessions-list',
  standalone: true,
  imports: [CommonModule, SessionCardComponent],
  template: `
    <div class="container">
      <h2>Próximas Sesiones</h2>
      <div *ngFor="let session of sessions">
        <app-session-card [session]="session"></app-session-card>
      </div>
      <p *ngIf="sessions.length === 0">No hay sesiones programadas</p>
    </div>
  `
})
export class SessionsListComponent {
  sessions: Session[] = [
    {
      id: 1,
      studentName: 'María García',
      date: new Date('2024-01-20T10:00:00'),
      type: 'Académica',
      duration: 30
    },
    {
      id: 2,
      studentName: 'Juan Pérez',
      date: new Date('2024-01-20T11:00:00'),
      type: 'Vocacional',
      duration: 45
    },
    {
      id: 3,
      studentName: 'Ana Martínez',
      date: new Date('2024-01-20T14:30:00'),
      type: 'Académica',
      duration: 60
    }
  ];
}

@Component({
  styleUrl: './asignacion-de-orientador.component.css',
  selector: 'asignacion-de-orientador',
  standalone: true,
  imports: [SessionsListComponent],
  template: `
    <div>
      <header style="background: #2563eb; color: white; padding: 1rem;">
        <div class="container">
          <h1>Portal del Orientador</h1>
        </div>
      </header>
      <app-sessions-list></app-sessions-list>
    </div>
  `
})
export class AsignacionDeOrientadorComponent {}
