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
      faculties: [
        {
          name: 'Facultad de Medicina',
          careers: ['Medicina Humana', 'Enfermería', 'Nutrición', 'Tecnología Médica']
        },
        {
          name: 'Facultad de Derecho y Ciencia Política',
          careers: ['Derecho', 'Ciencia Política']
        },
        {
          name: 'Facultad de Ingeniería',
          careers: [
            'Ingeniería de Sistemas',
            'Ingeniería Electrónica',
            'Ingeniería Civil',
            'Ingeniería Industrial',
            'Ingeniería Geológica'
          ]
        },
        {
          name: 'Facultad de Ciencias Sociales',
          careers: ['Sociología', 'Antropología', 'Historia', 'Trabajo Social']
        },
        {
          name: 'Facultad de Letras y Ciencias Humanas',
          careers: ['Literatura', 'Filosofía', 'Lingüística', 'Comunicación Social']
        }
      ],
      details: 'Fundada en 1551, es la universidad más antigua de América. Ofrece una amplia variedad de programas académicos y es líder en investigación en Perú.',
      campuses: ['Ciudad Universitaria', 'Sede de Medicina']
    },
    {
      name: 'Pontificia Universidad Católica del Perú',
      location: { department: 'Lima', province: 'Lima', district: 'San Miguel' },
      type: 'Privada',
      faculties: [
        {
          name: 'Facultad de Ciencias e Ingeniería',
          careers: [
            'Ingeniería Informática',
            'Ingeniería Electrónica',
            'Ingeniería Civil',
            'Ingeniería Industrial',
            'Matemáticas'
          ]
        },
        {
          name: 'Facultad de Derecho',
          careers: ['Derecho']
        },
        {
          name: 'Facultad de Gestión y Alta Dirección',
          careers: ['Administración de Empresas', 'Gestión Social', 'Marketing Estratégico']
        },
        {
          name: 'Facultad de Arte y Diseño',
          careers: ['Arte', 'Diseño Gráfico', 'Diseño Industrial']
        },
        {
          name: 'Facultad de Letras y Ciencias Humanas',
          careers: ['Historia', 'Geografía', 'Arqueología']
        }
      ],
      details: 'Destacada por su enfoque interdisciplinario, investigación de alta calidad y programas de responsabilidad social.',
      campuses: ['Campus San Miguel']
    },
    {
      name: 'Universidad Nacional de Ingeniería',
      location: { department: 'Lima', province: 'Lima', district: 'Rímac' },
      type: 'Pública',
      faculties: [
        {
          name: 'Facultad de Ingeniería Civil',
          careers: ['Ingeniería Civil', 'Ingeniería Sanitaria']
        },
        {
          name: 'Facultad de Ingeniería Mecánica',
          careers: ['Ingeniería Mecánica', 'Ingeniería Mecatrónica']
        },
        {
          name: 'Facultad de Ciencias',
          careers: ['Física', 'Matemáticas', 'Química']
        },
        {
          name: 'Facultad de Arquitectura, Urbanismo y Artes',
          careers: ['Arquitectura', 'Urbanismo']
        }
      ],
      details: 'Reconocida por su rigor académico y contribución al desarrollo tecnológico del país, formando ingenieros de primer nivel.',
      campuses: ['Campus Principal']
    },
    {
      name: 'Universidad Peruana de Ciencias Aplicadas',
      location: { department: 'Lima', province: 'Lima', district: 'Monterrico' },
      type: 'Privada',
      faculties: [
        {
          name: 'Facultad de Negocios',
          careers: ['Administración', 'Marketing', 'Negocios Internacionales', 'Contabilidad y Finanzas']
        },
        {
          name: 'Facultad de Diseño y Comunicación',
          careers: ['Diseño Gráfico', 'Publicidad', 'Comunicación y Periodismo', 'Animación Digital']
        },
        {
          name: 'Facultad de Ingeniería',
          careers: [
            'Ingeniería de Software',
            'Ingeniería Ambiental',
            'Ingeniería Electrónica',
            'Ingeniería Civil',
            'Ingeniería Industrial',
            'Ingeniería Mecatrónica',
            'Ciencias de la Computación'
          ]
        },
        {
          name: 'Facultad de Ciencias de la Salud',
          careers: ['Nutrición', 'Fisioterapia', 'Psicología', 'Medicina Humana']
        },
        {
          name: 'Facultad de Derecho',
          careers: ['Derecho']
        },
        {
          name: 'Facultad de Arquitectura y Urbanismo',
          careers: ['Arquitectura', 'Diseño de Interiores']
        },
        {
          name: 'Facultad de Artes Contemporáneas',
          careers: ['Música', 'Producción Musical', 'Danza']
        }
      ],
      details: 'Universidad enfocada en la innovación, con sedes modernas y una amplia oferta académica. Ofrece programas internacionales y doble titulación con universidades extranjeras.',
      campuses: [
        'Campus Monterrico',
        'Campus San Miguel',
        'Campus Villa',
        'Campus Chorrillos'
      ]
    },
    
    {
      name: 'Universidad Nacional Agraria La Molina',
      location: { department: 'Lima', province: 'Lima', district: 'La Molina' },
      type: 'Pública',
      faculties: [
        {
          name: 'Facultad de Agronomía',
          careers: ['Agronomía', 'Fitotecnia']
        },
        {
          name: 'Facultad de Ciencias Forestales',
          careers: ['Ingeniería Forestal']
        },
        {
          name: 'Facultad de Industrias Alimentarias',
          careers: ['Ingeniería de Industrias Alimentarias']
        },
        {
          name: 'Facultad de Ciencias Biológicas',
          careers: ['Biología', 'Microbiología']
        }
      ],
      details: 'Líder en ciencias agrícolas, sostenibilidad y tecnología aplicada al desarrollo rural.',
      campuses: ['Campus Principal']
    },
    {
      name: 'Universidad de Lima',
      location: { department: 'Lima', province: 'Lima', district: 'Santiago de Surco' },
      type: 'Privada',
      faculties: [
        {
          name: 'Facultad de Ciencias Empresariales',
          careers: ['Administración', 'Contabilidad', 'Negocios Internacionales']
        },
        {
          name: 'Facultad de Comunicación',
          careers: ['Comunicación Audiovisual', 'Comunicación Corporativa']
        },
        {
          name: 'Facultad de Ingeniería',
          careers: ['Ingeniería Industrial', 'Ingeniería de Sistemas']
        }
      ],
      details: 'Famosa por su enfoque empresarial, tecnología de vanguardia y modernas instalaciones.',
      campuses: ['Campus Santiago de Surco']
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

      // Filtrar por carrera en las facultades
      const matchesCareer = career === '' || university.faculties.some(faculty =>
        faculty.careers.includes(career)
      );

      return matchesDepartment && matchesProvince && matchesDistrict && matchesType && matchesCareer;
    });

    return of(filtered);
  }
}