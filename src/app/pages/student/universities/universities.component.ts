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

  selectedFilters = {
    department: 'Todos',
    province: 'Todos',
    district: 'Todos',
    type: 'Todos',
    career: ''
  };

  constructor(private universitiesService: UniversitiesService) {}

  ngOnInit(): void {
    this.universitiesService.getUniversities().subscribe((data) => {
      this.universities = data;
      this.filteredUniversities = data;

      // Generar valores únicos para los filtros
      this.departments = Array.from(new Set(data.map((u) => u.location.department)));
      this.provinces = Array.from(new Set(data.map((u) => u.location.province)));
      this.districts = Array.from(new Set(data.map((u) => u.location.district)));
    });
  }

  applyFilters(event: Event): void {
    event.preventDefault();
    this.universitiesService
      .filterUniversities(
        this.selectedFilters.department,
        this.selectedFilters.province,
        this.selectedFilters.district,
        this.selectedFilters.type as 'Pública' | 'Privada' | 'Todos',
        this.selectedFilters.career
      )
      .subscribe((data) => {
        this.filteredUniversities = data;
      });
  }

  clearFilters(): void {
    this.selectedFilters = {
      department: 'Todos',
      province: 'Todos',
      district: 'Todos',
      type: 'Todos',
      career: ''
    };
    this.filteredUniversities = this.universities;
  }
}
