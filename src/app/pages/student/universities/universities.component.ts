import { Component, OnInit } from '@angular/core';
import { UniversitiesService } from '../../../shared/services/universities';
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
      this.careers = Array.from(new Set(data.flatMap((u) => u.faculties.flatMap(faculty => faculty.careers))));
      this.faculties = Array.from(new Set(data.flatMap((u) => u.faculties.map(faculty => faculty.name))));
    });
  }

  applyFilters(event: Event): void {
    event.preventDefault();

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

  showDetails(university: University): void {
    alert(`Detalles de la universidad:\n${JSON.stringify(university, null, 2)}`);
  }
}
