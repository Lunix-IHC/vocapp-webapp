import { Component } from '@angular/core';

@Component({
  selector: 'app-universities',
  templateUrl: './universities.component.html',
  styleUrls: ['./universities.component.css']
})
export class UniversitiesComponent {
  // Lista de universidades con su información detallada
  universities = [
    {
      name: 'Universidad Peruana de Ciencias Aplicadas',
      campuses: ['Monterrico', 'San Miguel', 'San Isidro', 'Villa'],
      details: 'La Universidad Peruana de Ciencias Aplicadas (UPC) es una universidad privada fundada en 1994. Ofrece programas de pregrado, maestría y doctorado en diversas áreas, como ingeniería, negocios, arquitectura y ciencias sociales. La UPC es conocida por su enfoque innovador y su vinculación con el mundo empresarial. La universidad tiene una infraestructura moderna y ofrece una amplia gama de servicios a sus estudiantes.',
      history: 'Fundada en 1994 por un grupo de empresarios peruanos, la UPC se ha consolidado como una de las principales universidades privadas del país.',
      academicPrograms: [
        'Ingeniería de Sistemas',
        'Arquitectura',
        'Administración de Empresas',
        'Derecho',
        'Medicina'
      ],
      location: 'Av. Comandante Espinar 1301, Monterrico, Lima, Perú'
    },
    {
      name: 'Universidad de Lima',
      campuses: ['San Miguel'],
      details: 'La Universidad de Lima (ULima) es una universidad privada fundada en 1962. Su campus principal está ubicado en San Isidro, Lima. La ULima se caracteriza por ofrecer programas académicos de alta calidad en diversas disciplinas, con un enfoque en la formación ética y profesional. Además, la universidad está comprometida con la investigación y la innovación tecnológica.',
      history: 'Desde su fundación en 1962, la Universidad de Lima ha trabajado para formar profesionales con un alto nivel de competitividad, destacándose en áreas como ingeniería, comunicación, economía, y derecho.',
      academicPrograms: [
        'Ingeniería Industrial',
        'Comunicación',
        'Negocios Internacionales',
        'Psicología',
        'Arquitectura'
      ],
      location: 'Av. Javier Prado Este 4600, San Isidro, Lima, Perú'
    },
    {
      name: 'Universidad Pacífico',
      campuses: ['San Isidro'],
      details: 'La Universidad del Pacífico (UP) es una universidad privada fundada en 1962. Es reconocida por su excelencia en la enseñanza de áreas como economía, derecho, y negocios. La universidad tiene un enfoque internacional y mantiene relaciones con diversas instituciones académicas y empresariales en todo el mundo.',
      history: 'Fundada en 1962 por empresarios peruanos, la Universidad del Pacífico se ha destacado por su formación en economía y negocios, posicionándose como una de las principales universidades del país en estos campos.',
      academicPrograms: [
        'Economía',
        'Administración de Empresas',
        'Derecho',
        'Ingeniería Empresarial',
        'Finanzas'
      ],
      location: 'Av. Salaverry 2020, San Isidro, Lima, Perú'
    },
    {
      name: 'UNI',
      campuses: ['Monterrico'],
      details: 'La Universidad Nacional de Ingeniería (UNI) es una universidad pública, fundada en 1876. Es la principal institución educativa en ingeniería del país, ofreciendo programas en ingeniería civil, industrial, de sistemas y electrónica, entre otras. La UNI es conocida por su alto nivel académico y su vinculación con el sector industrial y científico del Perú.',
      history: 'Fundada en 1876, la UNI tiene una rica tradición en la educación de ingenieros, siendo considerada una de las universidades más prestigiosas en su campo en América Latina.',
      academicPrograms: [
        'Ingeniería Civil',
        'Ingeniería Industrial',
        'Ingeniería de Sistemas',
        'Ingeniería Electrónica',
        'Arquitectura'
      ],
      location: 'Av. Túpac Amaru 210, Rímac, Lima, Perú'
    },
    {
      name: 'Universidad Católica',
      campuses: ['San Miguel', 'San Isidro'],
      details: 'La Pontificia Universidad Católica del Perú (PUCP) es una universidad privada fundada en 1917. Es una de las instituciones más prestigiosas y antiguas del país, conocida por su enfoque académico riguroso y su compromiso con la formación integral de sus estudiantes. La PUCP ofrece una amplia variedad de programas de pregrado, posgrado e investigación.',
      history: 'La PUCP fue fundada en 1917 por la Compañía de Jesús y ha sido clave en la formación de líderes en áreas como derecho, economía, ciencias sociales, e ingeniería.',
      academicPrograms: [
        'Derecho',
        'Ciencias Sociales',
        'Ingeniería de Sistemas',
        'Diseño',
        'Psicología',
        'Educación'
      ],
      location: 'Av. Universitaria 1801, San Miguel, Lima, Perú'
    }
  ]
  

  campuses = ['Monterrico', 'San Miguel', 'San Isidro', 'Villa']; // Lista de campus disponibles
  selectedCampus = 'Todos'; // Filtro de campus seleccionado
  searchQuery = ''; // Filtro de búsqueda por nombre
  selectedUniversity: any = null; // Universidad seleccionada para mostrar detalles

  // Filtro para las universidades basado en campus y búsqueda
  get filteredUniversities() {
    return this.universities.filter((university) => {
      const matchesCampus = this.selectedCampus === 'Todos' || university.campuses.includes(this.selectedCampus);
      const matchesSearch = university.name.toLowerCase().includes(this.searchQuery.toLowerCase());
      return matchesCampus && matchesSearch;
    });
  }

  // Función para seleccionar una universidad y mostrar sus detalles
  selectUniversity(university: any) {
    this.selectedUniversity = university;
  }

  // Función para deseleccionar la universidad y volver a la lista
  deselectUniversity() {
    this.selectedUniversity = null;
  }
}
