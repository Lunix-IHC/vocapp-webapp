import { Component, OnInit } from '@angular/core';
import { UniversitiesService } from '../../../shared/services/universities.service';
import { University } from '../../../shared/models/universities';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-universities',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './universities.component.html',
  styleUrls: ['./universities.component.css']
})
export class UniversitiesComponent implements OnInit {
  universities: University[] = [];
  filteredUniversities: University[] = [];
  selectedUniversity: University | null = null; // Para almacenar la universidad seleccionada

  departments: string[] = [];
  provinces: string[] = [];
  districts: string[] = [];
  careers: string[] = [];
  faculties: string[] = [];
  searchTerm: string = '';

  selectedFilters = {
    department: 'Todos',
    province: 'Todos',
    district: 'Todos',
    type: 'Todos',
    career: 'Todos',
    faculty: 'Todos'
  };

  constructor(private universitiesService: UniversitiesService) {}

  ngOnInit(): void {
    this.universitiesService.getUniversities().subscribe((data) => {
      this.universities = data;
      this.filteredUniversities = data;

      // Crear listas únicas para los filtros
      this.departments = Array.from(new Set(data.map((u) => u.location.department)));
      this.provinces = Array.from(new Set(data.map((u) => u.location.province)));
      this.districts = Array.from(new Set(data.map((u) => u.location.district)));
      this.careers = Array.from(new Set(data.flatMap((u) => u.faculties.flatMap(faculty => faculty.careers)))); // Filtrar carreras
      this.faculties = Array.from(new Set(data.flatMap((u) => u.faculties.map(faculty => faculty.name)))); // Filtrar facultades
    });
  }

  // Método para aplicar los filtros
  applyFilters(event: Event): void {
    event.preventDefault();

    // Filtrar universidades con base en los criterios seleccionados
    this.filteredUniversities = this.universities.filter((university) => {
      const matchesSearchTerm = university.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesDepartment = this.selectedFilters.department === 'Todos' || university.location.department === this.selectedFilters.department;
      const matchesProvince = this.selectedFilters.province === 'Todos' || university.location.province === this.selectedFilters.province;
      const matchesDistrict = this.selectedFilters.district === 'Todos' || university.location.district === this.selectedFilters.district;
      const matchesType = this.selectedFilters.type === 'Todos' || university.type === this.selectedFilters.type;
      const matchesCareer = this.selectedFilters.career === 'Todos' || university.faculties.some(faculty => faculty.careers.includes(this.selectedFilters.career));
      const matchesFaculty = this.selectedFilters.faculty === 'Todos' || university.faculties.some(faculty => faculty.name === this.selectedFilters.faculty);

      return matchesSearchTerm && matchesDepartment && matchesProvince && matchesDistrict && matchesType && matchesCareer && matchesFaculty;
    });
  }

  // Método para limpiar los filtros
  clearFilters(): void {
    this.searchTerm = '';
    this.selectedFilters = {
      department: 'Todos',
      province: 'Todos',
      district: 'Todos',
      type: 'Todos',
      career: 'Todos',
      faculty: 'Todos'
    };
    this.filteredUniversities = this.universities;
  }

  // Mostrar detalles de una universidad seleccionada
  showDetails(university: University): void {
    this.selectedUniversity = university;
  }

  // Cerrar los detalles de la universidad
  closeDetails(): void {
    this.selectedUniversity = null;
  }
}
