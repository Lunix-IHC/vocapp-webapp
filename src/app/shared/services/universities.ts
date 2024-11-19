import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { University } from '../models/universities';

@Injectable({
  providedIn: 'root'
})
export class UniversitiesService {
    private universities: University[] = [
      {
        name: 'Universidad Nacional Mayor de San Marcos',
        location: { department: 'Lima', province: 'Lima', district: 'Centro' },
        type: 'Pública',
        careers: ['Medicina', 'Derecho', 'Ingeniería', 'Ciencias Sociales'],
        details: 'La universidad más antigua de América, fundada en 1551.',
        campuses: ['Ciudad Universitaria']
      },
      {
        name: 'Pontificia Universidad Católica del Perú',
        location: { department: 'Lima', province: 'Lima', district: 'San Miguel' },
        type: 'Privada',
        careers: ['Administración', 'Ingeniería', 'Arte', 'Derecho'],
        details: 'Universidad líder en investigación y excelencia académica.',
        campuses: ['Campus San Miguel']
      },
      {
        name: 'Universidad Nacional de Ingeniería',
        location: { department: 'Lima', province: 'Lima', district: 'Rímac' },
        type: 'Pública',
        careers: ['Ingeniería Civil', 'Ingeniería Mecánica', 'Arquitectura'],
        details: 'Especializada en formar ingenieros de primer nivel.',
        campuses: ['Campus Principal']
      },
      {
        name: 'Universidad Peruana de Ciencias Aplicadas',
        location: { department: 'Lima', province: 'Lima', district: 'Monterrico' },
        type: 'Privada',
        careers: ['Negocios', 'Diseño', 'Tecnología'],
        details: 'Universidad moderna con un enfoque en innovación.',
        campuses: ['Campus Monterrico', 'Campus San Miguel']
      },
      {
        name: 'Universidad Nacional Agraria La Molina',
        location: { department: 'Lima', province: 'Lima', district: 'La Molina' },
        type: 'Pública',
        careers: ['Agronomía', 'Biología', 'Ingeniería Ambiental'],
        details: 'Especializada en agronomía y ciencias ambientales.',
        campuses: ['Campus Principal']
      },
      {
        name: 'Universidad de Piura',
        location: { department: 'Piura', province: 'Piura', district: 'Piura' },
        type: 'Privada',
        careers: ['Comunicación', 'Derecho', 'Economía'],
        details: 'Universidad privada reconocida en la región norte.',
        campuses: ['Campus Piura', 'Campus Lima']
      },
      {
        name: 'Universidad Nacional de Trujillo',
        location: { department: 'La Libertad', province: 'Trujillo', district: 'Trujillo' },
        type: 'Pública',
        careers: ['Medicina', 'Educación', 'Derecho', 'Ingeniería'],
        details: 'Una de las universidades más importantes del norte del Perú.',
        campuses: ['Campus Principal']
      },
      {
        name: 'Universidad Andina del Cusco',
        location: { department: 'Cusco', province: 'Cusco', district: 'Cusco' },
        type: 'Privada',
        careers: ['Turismo', 'Historia', 'Antropología'],
        details: 'Promueve la preservación cultural y el turismo sostenible.',
        campuses: ['Campus Cusco']
      }
    ];
  
    /**
     * Obtiene todas las universidades disponibles.
     */
    getUniversities(): Observable<University[]> {
      return of(this.universities);
    }
  
    /**
     * Filtra universidades según ubicación, tipo de gestión y/o carreras.
     * 
     * @param department - Departamento seleccionado.
     * @param province - Provincia seleccionada.
     * @param district - Distrito seleccionado.
     * @param type - Tipo de gestión (Pública, Privada o ambas).
     * @param career - Carrera seleccionada.
     * @returns Lista de universidades filtradas.
     */
    filterUniversities(
      department: string,
      province: string,
      district: string,
      type: 'Pública' | 'Privada' | 'Todos',
      career: string
    ): Observable<University[]> {
      const filtered = this.universities.filter((university) => {
        const matchesDepartment = department === 'Todos' || university.location.department === department;
        const matchesProvince = province === 'Todos' || university.location.province === province;
        const matchesDistrict = district === 'Todos' || university.location.district === district;
        const matchesType = type === 'Todos' || university.type === type;
        const matchesCareer = career === '' || university.careers.includes(career);
  
        return matchesDepartment && matchesProvince && matchesDistrict && matchesType && matchesCareer;
      });
      return of(filtered);
    }
  }