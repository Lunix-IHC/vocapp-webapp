import { Injectable } from '@angular/core';

export interface Advisor {
  name: string;
  id: number;
}

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  private advisors: Advisor[] = [
    { id: 1, name: 'Francisco Emanuel Aguilar' },
    { id: 2, name: 'Luis Martin Sanchez Canaval' },
    { id: 3, name: 'Elizabeth Del Pilar Saenz Musayon' },
    { id: 4, name: 'Henry Antonio Mendoza Puerta' },
    { id: 5, name: 'Jonathan Abrahan Sueros Zarate' },
  ];

  // Obtener todos los asesores
  getAdvisors(): Advisor[] {
    return [...this.advisors];
  }

  // Buscar asesores por nombre
  searchAdvisors(query: string): Advisor[] {
    return this.advisors.filter((advisor) =>
      advisor.name.toLowerCase().includes(query.toLowerCase())
    );
  }
}

