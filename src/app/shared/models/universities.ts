export interface University {
    name: string; // Nombre de la universidad
    campuses: string[]; // Opcional: Si quieres mantener los campus
    details: string; // Detalles adicionales
    location: {
      department: string; // Departamento
      province: string; // Provincia
      district: string; // Distrito
    };
    type: 'Pública' | 'Privada'; // Tipo de gestión
    careers: string[]; // Carreras ofrecidas
  }
  