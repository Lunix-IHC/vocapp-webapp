export interface University {
  name: string; // Nombre de la universidad
  campuses: string[]; // Campus de la universidad
  details: string; // Detalles adicionales
  location: {
    department: string; // Departamento
    province: string; // Provincia
    district: string; // Distrito
  };
  type: 'Pública' | 'Privada'; // Tipo de gestión
  faculties: { // Facultades y carreras ofrecidas
    name: string;
    careers: string[];
  }[];
  academicOffer?: string; // Oferta académica (opcional)
  costs?: string; // Costos (matrícula, pensiones, etc.)
  modality?: 'Presencial' | 'Virtual' | 'Híbrida'; // Modalidad de enseñanza
  prestige?: string; // Información sobre acreditación y prestigio
}
