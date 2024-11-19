import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { University } from '../models/universities';

@Injectable({
  providedIn: 'root'
})
export class UniversitiesService {
  private universities: University[] = [
    {
      name: 'Universidad Nacional Mayor de San Marcos (UNMSM)',
      location: { department: 'Lima', province: 'Lima', district: 'Centro' },
      type: 'Pública',
      faculties: [
        {
          name: 'Facultad de Medicina',
          careers: [
            'Medicina Humana',
            'Enfermería',
            'Nutrición',
            'Tecnología Médica (Laboratorio Clínico, Terapia Física, Terapia Ocupacional)',
            'Obstetricia'
          ]
        },
        {
          name: 'Facultad de Derecho y Ciencia Política',
          careers: ['Derecho', 'Ciencia Política']
        },
        {
          name: 'Facultad de Ingeniería',
          careers: [
            'Ingeniería de Sistemas',
            'Ingeniería Industrial',
            'Ingeniería Geológica',
            'Ingeniería Metalúrgica',
            'Ingeniería de Minas'
          ]
        },
        {
          name: 'Facultad de Ciencias Biológicas',
          careers: [
            'Biología General',
            'Microbiología y Parasitología',
            'Genética y Biotecnología',
            'Zoología',
            'Botánica',
            'Hidrobiología y Pesquería'
          ]
        },
        {
          name: 'Facultad de Ciencias Sociales',
          careers: [
            'Antropología',
            'Sociología',
            'Arqueología',
            'Trabajo Social',
            'Comunicación Social'
          ]
        },
        {
          name: 'Facultad de Ciencias Económicas',
          careers: ['Economía', 'Economía Pública', 'Economía Internacional']
        },
        {
          name: 'Facultad de Psicología',
          careers: ['Psicología Clínica', 'Psicología Organizacional']
        },
        {
          name: 'Facultad de Letras y Ciencias Humanas',
          careers: [
            'Literatura',
            'Lingüística',
            'Historia',
            'Filosofía',
            'Bibliotecología y Ciencias de la Información'
          ]
        },
        {
          name: 'Facultad de Farmacia y Bioquímica',
          careers: ['Farmacia y Bioquímica']
        },
        {
          name: 'Facultad de Química e Ingeniería Química',
          careers: ['Química', 'Ingeniería Química']
        },
        {
          name: 'Facultad de Odontología',
          careers: ['Odontología']
        },
        {
          name: 'Facultad de Educación',
          careers: [
            'Educación Inicial',
            'Educación Primaria',
            'Educación Secundaria (Matemática, Lengua, Historia, etc.)'
          ]
        },
        {
          name: 'Facultad de Ingeniería Electrónica y Eléctrica',
          careers: [
            'Ingeniería Electrónica',
            'Ingeniería Eléctrica',
            'Ingeniería de Telecomunicaciones'
          ]
        }
      ],
      details: 'Fundada en 1551, la Universidad Nacional Mayor de San Marcos es la universidad más antigua de América. Es conocida como la "Decana de América" por su prestigio y larga tradición en la formación de profesionales destacados en diversas áreas del conocimiento.',
      campuses: [
        'Ciudad Universitaria',
        'Facultad de Medicina (San Fernando)',
        'Facultad de Odontología',
        'Facultad de Farmacia y Bioquímica'
      ],
      academicOffer:
        'Medicina, Derecho, Ciencias Sociales, Ingenierías, Ciencias Biológicas, Economía, Letras, entre otros.',
      costs: 'Educación gratuita para estudiantes nacionales; costos administrativos mínimos.',
      modality: 'Presencial',
      prestige:
        'Reconocida por su excelencia académica y su liderazgo en investigación en Perú y América Latina. Acreditada por la SUNEDU y diversas entidades internacionales.'
    },
    
    {
      name: 'Pontificia Universidad Católica del Perú (PUCP)',
      location: { department: 'Lima', province: 'Lima', district: 'San Miguel' },
      type: 'Privada',
      faculties: [
        {
          name: 'Facultad de Ciencias e Ingeniería (FCI)',
          careers: [
            'Ingeniería Civil',
            'Ingeniería Industrial',
            'Ingeniería Informática',
            'Ingeniería de Minas',
            'Ingeniería Mecánica',
            'Ingeniería Electrónica',
            'Ingeniería Mecatrónica',
            'Ingeniería Biomédica',
            'Ingeniería Ambiental',
            'Ciencia de la Computación'
          ]
        },
        {
          name: 'Facultad de Arquitectura y Urbanismo',
          careers: ['Arquitectura']
        },
        {
          name: 'Facultad de Letras y Ciencias Humanas',
          careers: [
            'Literatura',
            'Filosofía',
            'Lingüística y Literatura',
            'Geografía y Medio Ambiente',
            'Historia'
          ]
        },
        {
          name: 'Facultad de Ciencias Sociales',
          careers: [
            'Antropología',
            'Sociología',
            'Ciencia Política y Gobierno',
            'Trabajo Social'
          ]
        },
        {
          name: 'Facultad de Derecho',
          careers: ['Derecho']
        },
        {
          name: 'Facultad de Economía y Finanzas',
          careers: ['Economía']
        },
        {
          name: 'Facultad de Educación',
          careers: [
            'Educación Inicial',
            'Educación Primaria',
            'Educación Secundaria (en diversas especialidades)'
          ]
        },
        {
          name: 'Facultad de Arte y Diseño',
          careers: [
            'Arte y Diseño Gráfico',
            'Escultura',
            'Grabado',
            'Pintura',
            'Diseño Industrial'
          ]
        },
        {
          name: 'Facultad de Gestión y Alta Dirección',
          careers: ['Gestión Empresarial']
        },
        {
          name: 'Facultad de Psicología',
          careers: ['Psicología']
        },
        {
          name: 'Facultad de Teología',
          careers: ['Teología']
        }
      ],
      details:
        'Fundada en 1917, la Pontificia Universidad Católica del Perú es reconocida como una de las mejores universidades del país y de América Latina. Se caracteriza por su excelencia académica, interdisciplinariedad y enfoque en la investigación y responsabilidad social.',
      campuses: ['Campus San Miguel (principal)', 'Sedes adicionales para posgrados y talleres específicos'],
      academicOffer:
        'Programas de pregrado en diversas áreas del conocimiento, maestrías, doctorados y programas de extensión profesional.',
      costs:
        'Matrícula desde S/ 1000; pensiones variables según categoría socioeconómica, desde S/ 1500 a S/ 4800 mensuales.',
      modality: 'Híbrida',
      prestige:
        'Primera universidad peruana en rankings internacionales como QS y THE, destacando por su calidad académica, programas de investigación y redes internacionales de colaboración.'
    },
    
    {
      name: 'Universidad de Ingeniería y Tecnología (UTEC)',
      location: { department: 'Lima', province: 'Lima', district: 'Barranco' },
      type: 'Privada',
      faculties: [
        { name: 'Facultad de Ingeniería', careers: ['Ingeniería de Sistemas', 'Ingeniería Industrial', 'Ingeniería Electrónica'] },
        { name: 'Facultad de Arquitectura y Diseño', careers: ['Arquitectura', 'Diseño de Interiores'] }
      ],
      details: 'Fundada en 2011, se enfoca en el desarrollo de tecnología e innovación. UTEC es una universidad con enfoque en ingeniería y tecnología.',
      campuses: ['Campus Barranco'],
      academicOffer: 'Ingeniería, Arquitectura, Ciencias de la Computación, etc.',
      costs: 'Matrícula: S/ 1200, Pensión: S/ 3500',
      modality: 'Presencial',
      prestige: 'Alta calidad académica con fuerte énfasis en la innovación tecnológica.'
    },
    {
      name: 'Universidad Nacional Agraria La Molina',
      location: { department: 'Lima', province: 'Lima', district: 'La Molina' },
      type: 'Pública',
      faculties: [
        { name: 'Facultad de Agronomía', careers: ['Ingeniería Agrónoma', 'Agricultura', 'Tecnología de Alimentos'] },
        { name: 'Facultad de Ciencias', careers: ['Biología', 'Ciencias Ambientales'] }
      ],
      details: 'Una de las universidades más antiguas en América Latina especializada en ciencias agrarias y ambientales.',
      campuses: ['Campus La Molina'],
      academicOffer: 'Ingeniería Agrónoma, Biología, Ciencia Ambiental, Tecnología de Alimentos, etc.',
      costs: 'Matrícula: S/ 700, Pensión: S/ 1500',
      modality: 'Presencial',
      prestige: 'Reconocida por su enfoque en investigación agrícola y desarrollo sostenible.'
    },
    {
      name: 'Universidad de Piura',
      location: { department: 'Piura', province: 'Piura', district: 'Piura' },
      type: 'Privada',
      faculties: [
        { name: 'Facultad de Derecho', careers: ['Derecho', 'Ciencias Políticas'] },
        { name: 'Facultad de Ingeniería', careers: ['Ingeniería Civil', 'Ingeniería Industrial'] }
      ],
      details: 'Universidad privada con énfasis en calidad educativa y un modelo de enseñanza integral.',
      campuses: ['Campus Piura', 'Campus Lima'],
      academicOffer: 'Derecho, Ingeniería, Economía, Arquitectura, etc.',
      costs: 'Matrícula: S/ 800, Pensión: S/ 2000',
      modality: 'Presencial',
      prestige: 'Reconocida en el norte del país por su excelencia académica.'
    },
    {
      name: 'Universidad Nacional de Ingeniería (UNI)',
      location: { department: 'Lima', province: 'Lima', district: 'Rímac' },
      type: 'Pública',
      faculties: [
        {
          name: 'Facultad de Ingeniería Civil (FIC)',
          careers: [
            'Ingeniería Civil',
            'Ingeniería Sanitaria',
            'Ingeniería Ambiental'
          ]
        },
        {
          name: 'Facultad de Ingeniería Mecánica (FIM)',
          careers: [
            'Ingeniería Mecánica',
            'Ingeniería Naval',
            'Ingeniería Mecatrónica'
          ]
        },
        {
          name: 'Facultad de Ingeniería Eléctrica y Electrónica (FIEE)',
          careers: [
            'Ingeniería Eléctrica',
            'Ingeniería Electrónica',
            'Ingeniería de Telecomunicaciones'
          ]
        },
        {
          name: 'Facultad de Ingeniería Geológica, Minera y Metalúrgica (FIGMM)',
          careers: [
            'Ingeniería Geológica',
            'Ingeniería de Minas',
            'Ingeniería Metalúrgica'
          ]
        },
        {
          name: 'Facultad de Ingeniería Industrial y de Sistemas (FIIS)',
          careers: [
            'Ingeniería Industrial',
            'Ingeniería de Sistemas',
            'Ingeniería de Seguridad y Salud Ocupacional'
          ]
        },
        {
          name: 'Facultad de Arquitectura, Urbanismo y Artes (FAUA)',
          careers: [
            'Arquitectura',
            'Urbanismo y Planeamiento Territorial'
          ]
        },
        {
          name: 'Facultad de Ciencias (FC)',
          careers: [
            'Física',
            'Matemática',
            'Ciencia de la Computación',
            'Estadística e Investigación Operativa'
          ]
        },
        {
          name: 'Facultad de Ingeniería Química y Textil (FIQT)',
          careers: [
            'Ingeniería Química',
            'Ingeniería Textil'
          ]
        },
        {
          name: 'Facultad de Ingeniería Mecánica y Energía (FIME)',
          careers: [
            'Ingeniería de Energía',
            'Ingeniería Mecánica de Fluidos'
          ]
        }
      ],
      details:
        'Fundada en 1876 por el ingeniero Eduardo de Habich, la Universidad Nacional de Ingeniería (UNI) es la institución líder en educación tecnológica en el Perú. Su enfoque está orientado al desarrollo industrial, la innovación y la investigación aplicada en diversas áreas de la ingeniería, arquitectura y ciencias.',
      campuses: [
        'Campus Principal (Rímac)',
        'Facultad de Arquitectura',
        'Facultad de Ingeniería Mecánica y Energía'
      ],
      academicOffer:
        'Ingenierías en diversas especialidades, Arquitectura, Física, Matemática, Ciencias de la Computación, entre otros.',
      costs:
        'Educación gratuita para estudiantes nacionales; costos administrativos reducidos.',
      modality: 'Presencial',
      prestige:
        'Reconocida como la mejor universidad de ingeniería del Perú, destacando en rankings nacionales e internacionales. Sus egresados lideran en los sectores de construcción, minería, energía y tecnología.'
    },
    
    {
      name: 'Universidad de San Martín de Porres',
      location: { department: 'Lima', province: 'Lima', district: 'San Martín de Porres' },
      type: 'Privada',
      faculties: [
        { name: 'Facultad de Medicina', careers: ['Medicina Humana', 'Farmacia', 'Odontología'] },
        { name: 'Facultad de Derecho', careers: ['Derecho', 'Ciencias Políticas'] }
      ],
      details: 'Destacada por sus programas de medicina, derecho, y ciencias sociales.',
      campuses: ['Campus Villa El Salvador', 'Campus San Martín de Porres'],
      academicOffer: 'Medicina, Derecho, Odontología, Ciencias Sociales, etc.',
      costs: 'Matrícula: S/ 600, Pensión: S/ 2500',
      modality: 'Presencial',
      prestige: 'Acreditación internacional en programas de Medicina y Derecho.'
    },
    {
      name: 'Universidad Nacional de San Agustín de Arequipa (UNSA)',
      location: { department: 'Arequipa', province: 'Arequipa', district: 'Arequipa' },
      type: 'Pública',
      faculties: [
        {
          name: 'Facultad de Ingeniería de Procesos',
          careers: [
            'Ingeniería Química',
            'Ingeniería Metalúrgica',
            'Ingeniería de Materiales'
          ]
        },
        {
          name: 'Facultad de Ciencias Naturales y Formales',
          careers: [
            'Biología',
            'Física',
            'Matemática',
            'Química'
          ]
        },
        {
          name: 'Facultad de Ciencias Histórico Sociales',
          careers: [
            'Historia',
            'Sociología',
            'Antropología',
            'Arqueología'
          ]
        },
        {
          name: 'Facultad de Arquitectura e Ingeniería Civil',
          careers: [
            'Arquitectura',
            'Ingeniería Civil',
            'Ingeniería Ambiental'
          ]
        },
        {
          name: 'Facultad de Derecho y Ciencias Políticas',
          careers: [
            'Derecho',
            'Ciencia Política y Gobernanza'
          ]
        },
        {
          name: 'Facultad de Economía y Negocios',
          careers: [
            'Economía',
            'Administración',
            'Contabilidad'
          ]
        },
        {
          name: 'Facultad de Ingeniería de Producción y Servicios',
          careers: [
            'Ingeniería Industrial',
            'Ingeniería de Sistemas',
            'Ingeniería Electrónica',
            'Ingeniería de Telecomunicaciones'
          ]
        },
        {
          name: 'Facultad de Ciencias de la Comunicación, Turismo y Psicología',
          careers: [
            'Comunicación Social',
            'Turismo',
            'Psicología'
          ]
        }
      ],
      details:
        'Fundada en 1828, la UNSA es una de las universidades más antiguas y prestigiosas de provincias. Reconocida por su excelencia académica y su aporte a la investigación científica en diversas áreas.',
      campuses: [
        'Campus Central (Arequipa)',
        'Campus de Ciencias Sociales',
        'Campus de Ingenierías'
      ],
      academicOffer:
        'Pregrado, maestrías, doctorados y educación continua en una amplia variedad de áreas académicas.',
      costs: 'Gratuita para estudiantes nacionales; pagos simbólicos por trámites administrativos.',
      modality: 'Presencial',
      prestige:
        'Acreditada por la SUNEDU y otras entidades internacionales. Reconocida como una de las mejores universidades públicas de Perú, destacando especialmente en las áreas de ingeniería, ciencias sociales y naturales.'
    },
    
    {
      name: 'Universidad de la Católica de Santa María',
      location: { department: 'Arequipa', province: 'Arequipa', district: 'Yanahuara' },
      type: 'Privada',
      faculties: [
        { name: 'Facultad de Ingeniería', careers: ['Ingeniería Civil', 'Ingeniería Mecánica'] },
        { name: 'Facultad de Ciencias Sociales', careers: ['Trabajo Social', 'Psicología'] }
      ],
      details: 'Famosa por su compromiso social y su orientación hacia el desarrollo regional y la inclusión.',
      campuses: ['Campus Arequipa'],
      academicOffer: 'Ingeniería, Psicología, Trabajo Social, Arquitectura, etc.',
      costs: 'Matrícula: S/ 700, Pensión: S/ 2000',
      modality: 'Presencial',
      prestige: 'Una de las universidades más destacadas del sur del Perú, con programas orientados a la inclusión social.'
    },
    {
      name: 'Universidad del Pacífico',
      location: { department: 'Lima', province: 'Lima', district: 'San Isidro' },
      type: 'Privada',
      faculties: [
        { name: 'Facultad de Economía', careers: ['Economía', 'Negocios Internacionales'] },
        { name: 'Facultad de Derecho', careers: ['Derecho', 'Derecho Corporativo'] }
      ],
      details: 'Es una universidad especializada en negocios, economía y derecho, con un enfoque en la globalización y la economía mundial.',
      campuses: ['Campus San Isidro'],
      academicOffer: 'Economía, Derecho, Finanzas, Negocios Internacionales, etc.',
      costs: 'Matrícula: S/ 800, Pensión: S/ 2200',
      modality: 'Presencial',
      prestige: 'Reconocida como una de las universidades líderes en economía y negocios en Perú.'
    },

    {
      name: 'Universidad Nacional de San Antonio Abad del Cusco',
      location: { department: 'Cusco', province: 'Cusco', district: 'Cusco' },
      type: 'Pública',
      faculties: [
        { name: 'Facultad de Ingeniería Civil', careers: ['Ingeniería Civil', 'Ingeniería Ambiental'] },
        { name: 'Facultad de Ingeniería Mecánica Eléctrica', careers: ['Ingeniería Mecánica', 'Ingeniería Eléctrica'] },
        { name: 'Facultad de Ciencias Sociales', careers: ['Sociología', 'Antropología', 'Historia'] },
        { name: 'Facultad de Ciencias Biológicas', careers: ['Biología', 'Biotecnología'] },
        { name: 'Facultad de Ciencias Agrarias', careers: ['Ingeniería Agrícola', 'Zootecnia'] },
        { name: 'Facultad de Ciencias Exactas', careers: ['Matemáticas', 'Estadística', 'Física'] },
        { name: 'Facultad de Medicina Humana', careers: ['Medicina', 'Enfermería'] }
      ],
      details: 'Fundada en 1692, esta universidad es una de las más antiguas y prestigiosas del sur del Perú. Tiene un fuerte enfoque en ciencias agrarias, ingeniería y ciencias sociales.',
      campuses: ['Campus Central Cusco', 'Campus de Quillabamba'],
      academicOffer: 'Ingeniería, Ciencias Sociales, Ciencias Biológicas, Medicina, etc.',
      costs: 'Matrícula: S/ 400, Pensión: Gratuita para carreras estatales',
      modality: 'Presencial',
      prestige: 'Reconocida como una de las mejores universidades públicas en el sur del país por su enfoque en investigación y desarrollo regional.'
    },
    {
      name: 'Universidad Nacional de la Amazonía Peruana',
      location: { department: 'Loreto', province: 'Maynas', district: 'Iquitos' },
      type: 'Pública',
      faculties: [
        { name: 'Facultad de Ciencias Biológicas', careers: ['Biología', 'Ecología y Gestión Ambiental'] },
        { name: 'Facultad de Agronomía', careers: ['Ingeniería Agronómica', 'Forestal'] },
        { name: 'Facultad de Ciencias de la Salud', careers: ['Enfermería', 'Obstetricia'] },
        { name: 'Facultad de Pesquería', careers: ['Ingeniería Pesquera', 'Acuicultura'] },
        { name: 'Facultad de Ingeniería Química', careers: ['Ingeniería Química'] },
        { name: 'Facultad de Educación', careers: ['Educación Inicial', 'Educación Primaria', 'Educación Física'] }
      ],
      details: 'Especializada en la formación de profesionales para preservar y gestionar los recursos naturales de la Amazonía, es un pilar en el desarrollo sostenible de la región.',
      campuses: ['Campus Iquitos', 'Campus Nauta'],
      academicOffer: 'Biología, Ciencias de la Salud, Educación, Ingeniería Química, etc.',
      costs: 'Matrícula: S/ 300, Pensión: Gratuita para carreras estatales',
      modality: 'Presencial',
      prestige: 'Conocida por su investigación sobre biodiversidad amazónica y proyectos sostenibles.'
    },
    {
      name: 'Universidad Nacional del Altiplano',
      location: { department: 'Puno', province: 'Puno', district: 'Puno' },
      type: 'Pública',
      faculties: [
        { name: 'Facultad de Ingeniería Mecánica Eléctrica', careers: ['Ingeniería Mecánica', 'Ingeniería Eléctrica'] },
        { name: 'Facultad de Ciencias Agrarias', careers: ['Ingeniería Agronómica', 'Zootecnia'] },
        { name: 'Facultad de Ciencias de la Educación', careers: ['Educación Primaria', 'Educación Secundaria', 'Educación Física'] },
        { name: 'Facultad de Ciencias Sociales', careers: ['Sociología', 'Antropología', 'Arqueología'] },
        { name: 'Facultad de Medicina Humana', careers: ['Medicina Humana'] },
        { name: 'Facultad de Derecho', careers: ['Derecho'] }
      ],
      details: 'Localizada a más de 3800 metros sobre el nivel del mar, es una universidad clave en la región altiplánica, con especial énfasis en la educación y la agricultura.',
      campuses: ['Campus Central Puno', 'Campus Juliaca'],
      academicOffer: 'Ingeniería, Ciencias Sociales, Derecho, Educación, Medicina, etc.',
      costs: 'Matrícula: S/ 500, Pensión: Gratuita para estudiantes de pregrado',
      modality: 'Presencial',
      prestige: 'Respetada por su compromiso con el desarrollo educativo y agrícola de la región altiplánica.'
    },
    {
      name: 'Universidad Nacional de San Agustín de Arequipa',
      location: { department: 'Arequipa', province: 'Arequipa', district: 'Arequipa' },
      type: 'Pública',
      faculties: [
        { name: 'Facultad de Ciencias Naturales', careers: ['Física', 'Química', 'Biología'] },
        { name: 'Facultad de Ingeniería de Procesos', careers: ['Ingeniería Química', 'Ingeniería Metalúrgica'] },
        { name: 'Facultad de Ciencias de la Salud', careers: ['Medicina', 'Enfermería', 'Obstetricia'] },
        { name: 'Facultad de Ciencias Económicas', careers: ['Economía', 'Administración', 'Contabilidad'] },
        { name: 'Facultad de Artes', careers: ['Arte', 'Diseño Gráfico', 'Escultura'] },
        { name: 'Facultad de Derecho', careers: ['Derecho'] }
      ],
      details: 'Con más de 190 años de historia, es una de las universidades más destacadas en el sur del Perú, conocida por su investigación en ingeniería y ciencias.',
      campuses: ['Campus Central Arequipa', 'Campus Selva Alegre'],
      academicOffer: 'Medicina, Ingeniería Química, Derecho, Arte, etc.',
      costs: 'Matrícula: S/ 600, Pensión: Gratuita para estudiantes nacionales',
      modality: 'Presencial',
      prestige: 'Reconocida por su alto nivel académico en ciencias e ingeniería.'
    },
    {
      name: 'Universidad Nacional del Centro del Perú',
      location: { department: 'Junín', province: 'Huancayo', district: 'El Tambo' },
      type: 'Pública',
      faculties: [
        { name: 'Facultad de Ingeniería Mecánica', careers: ['Ingeniería Mecánica', 'Ingeniería Mecatrónica'] },
        { name: 'Facultad de Ciencias de la Educación', careers: ['Educación Inicial', 'Educación Primaria', 'Educación Especial'] },
        { name: 'Facultad de Ciencias Económicas', careers: ['Economía', 'Administración'] },
        { name: 'Facultad de Ciencias de la Salud', careers: ['Medicina Humana', 'Enfermería'] },
        { name: 'Facultad de Arquitectura y Urbanismo', careers: ['Arquitectura', 'Urbanismo'] }
      ],
      details: 'Una universidad emblemática en la sierra central, conocida por su excelencia en carreras técnicas y de salud.',
      campuses: ['Campus El Tambo', 'Campus Satipo'],
      academicOffer: 'Ingeniería, Ciencias de la Salud, Arquitectura, Educación, etc.',
      costs: 'Matrícula: S/ 500, Pensión: Gratuita para estudiantes nacionales',
      modality: 'Presencial',
      prestige: 'Respetada por su impacto en la región central y su enfoque en innovación tecnológica.'
    },
    {
      name: 'Universidad Peruana de Ciencias Aplicadas (UPC)',
      location: { department: 'Lima', province: 'Lima', district: 'Monterrico' },
      type: 'Privada',
      faculties: [
        {
          name: 'Facultad de Negocios',
          careers: [
            'Administración y Finanzas',
            'Administración y Marketing',
            'Administración de Empresas',
            'Negocios Internacionales'
          ]
        },
        {
          name: 'Facultad de Ingeniería',
          careers: [
            'Ingeniería de Sistemas',
            'Ingeniería Industrial',
            'Ingeniería Civil',
            'Ingeniería Ambiental',
            'Ingeniería Mecatrónica',
            'Ingeniería Electrónica'
          ]
        },
        {
          name: 'Facultad de Comunicaciones',
          careers: [
            'Comunicación y Periodismo',
            'Comunicación Audiovisual y Medios Interactivos',
            'Publicidad',
            'Relaciones Públicas'
          ]
        },
        {
          name: 'Facultad de Ciencias de la Salud',
          careers: [
            'Medicina',
            'Nutrición y Dietética',
            'Enfermería',
            'Psicología'
          ]
        },
        {
          name: 'Facultad de Diseño',
          careers: [
            'Diseño Gráfico',
            'Diseño de Interiores',
            'Diseño y Gestión en Moda',
            'Animación Digital y Arte 3D'
          ]
        },
        {
          name: 'Facultad de Derecho',
          careers: ['Derecho']
        },
        {
          name: 'Facultad de Arquitectura',
          careers: ['Arquitectura']
        },
        {
          name: 'Facultad de Economía',
          careers: ['Economía y Negocios', 'Economía y Finanzas']
        },
        {
          name: 'Facultad de Arte Contemporáneo',
          careers: ['Arte Contemporáneo']
        },
        {
          name: 'Facultad de Educación',
          careers: [
            'Educación Inicial',
            'Educación Primaria',
            'Educación Secundaria'
          ]
        }
      ],
      details: 'Fundada en 1994, la UPC es conocida por su enfoque en innovación, tecnología y formación de profesionales altamente competitivos. Es una de las universidades privadas más prestigiosas de Perú, con programas diseñados para el mundo laboral global.',
      campuses: [
        'Campus Monterrico',
        'Campus San Isidro',
        'Campus Villa',
        'Campus San Miguel'
      ],
      academicOffer:
        'Negocios, Ingeniería, Comunicaciones, Ciencias de la Salud, Diseño, Derecho, Arquitectura, entre otros.',
      costs: 'Matrícula: S/ 1000, Pensión: S/ 2500 - S/ 4500 dependiendo de la carrera.',
      modality: 'Presencial',
      prestige:
        'Acreditada internacionalmente por instituciones como el WASC Senior College and University Commission. Reconocida por su innovación educativa y alta empleabilidad de egresados.'
    },
    {
      name: 'Universidad de Lima (ULima)',
      location: { department: 'Lima', province: 'Lima', district: 'Santiago de Surco' },
      type: 'Privada',
      faculties: [
        {
          name: 'Facultad de Ciencias Empresariales y Económicas',
          careers: [
            'Administración',
            'Contabilidad',
            'Economía',
            'Negocios Internacionales',
            'Marketing'
          ]
        },
        {
          name: 'Facultad de Comunicación',
          careers: [
            'Comunicación Audiovisual y Medios Interactivos',
            'Periodismo',
            'Publicidad y Medios Digitales'
          ]
        },
        {
          name: 'Facultad de Derecho',
          careers: ['Derecho']
        },
        {
          name: 'Facultad de Ingeniería y Arquitectura',
          careers: [
            'Ingeniería Industrial',
            'Ingeniería Civil',
            'Ingeniería de Sistemas',
            'Ingeniería Electrónica'
          ]
        },
        {
          name: 'Facultad de Psicología',
          careers: ['Psicología']
        },
        {
          name: 'Facultad de Humanidades',
          careers: ['Letras y Ciencias Humanas', 'Filosofía', 'Historia del Arte']
        }
      ],
      details:
        'Fundada en 1962, la Universidad de Lima se ha consolidado como una de las instituciones privadas más prestigiosas del Perú. Destaca por su enfoque en la formación integral, la investigación aplicada y su conexión con el sector empresarial.',
      campuses: [
        'Campus Principal en Santiago de Surco',
        'Centros de Innovación y Desarrollo Empresarial'
      ],
      academicOffer:
        'Programas de pregrado y posgrado, además de diplomados y educación continua orientada al desarrollo profesional.',
      costs:
        'Matrícula anual aproximada de S/ 2000; pensiones mensuales según categoría socioeconómica, entre S/ 2000 y S/ 3500.',
      modality: 'Presencial',
      prestige:
        'Reconocida por su formación empresarial y su infraestructura moderna. Cuenta con acreditaciones internacionales en diversas carreras, destacando en los rankings nacionales por empleabilidad de sus egresados.'
    },
    {
      name: 'Universidad Nacional de Trujillo (UNT)',
      location: { department: 'La Libertad', province: 'Trujillo', district: 'Trujillo' },
      type: 'Pública',
      faculties: [
        {
          name: 'Facultad de Ciencias Biológicas',
          careers: [
            'Biología',
            'Microbiología y Parasitología',
            'Biotecnología'
          ]
        },
        {
          name: 'Facultad de Ciencias Físicas y Matemáticas',
          careers: [
            'Física',
            'Matemática',
            'Estadística'
          ]
        },
        {
          name: 'Facultad de Ingeniería Química',
          careers: [
            'Ingeniería Química',
            'Ingeniería Agroindustrial',
            'Ingeniería Ambiental'
          ]
        },
        {
          name: 'Facultad de Medicina',
          careers: [
            'Medicina Humana',
            'Tecnología Médica (Radiología, Laboratorio Clínico)',
            'Enfermería'
          ]
        },
        {
          name: 'Facultad de Derecho y Ciencias Políticas',
          careers: [
            'Derecho',
            'Ciencias Políticas y Gobernabilidad'
          ]
        },
        {
          name: 'Facultad de Ciencias Económicas',
          careers: [
            'Economía',
            'Administración',
            'Contabilidad'
          ]
        },
        {
          name: 'Facultad de Ingeniería',
          careers: [
            'Ingeniería Civil',
            'Ingeniería Mecánica',
            'Ingeniería Industrial',
            'Ingeniería de Sistemas'
          ]
        },
        {
          name: 'Facultad de Educación y Ciencias de la Comunicación',
          careers: [
            'Educación Primaria',
            'Educación Secundaria',
            'Ciencias de la Comunicación'
          ]
        },
        {
          name: 'Facultad de Ciencias Sociales',
          careers: [
            'Sociología',
            'Historia y Geografía',
            'Antropología',
            'Arqueología'
          ]
        },
        {
          name: 'Facultad de Farmacia y Bioquímica',
          careers: [
            'Farmacia y Bioquímica',
            'Ciencias Farmacéuticas'
          ]
        }
      ],
      details:
        'Fundada en 1824, la UNT es la primera universidad republicana del Perú. Es un referente en educación superior en la región norte, con un sólido compromiso con la investigación y el desarrollo regional.',
      campuses: [
        'Campus Universitario Principal (Trujillo)',
        'Campus de Ciencias Agropecuarias y Forestales',
        'Campus de Ciencias de la Salud'
      ],
      academicOffer:
        'Pregrado, posgrado (maestrías y doctorados) y programas de formación continua en diversas áreas del conocimiento.',
      costs: 'Gratuita para estudiantes nacionales; tarifas mínimas en servicios administrativos.',
      modality: 'Presencial',
      prestige:
        'Reconocida por su calidad académica y su aporte al desarrollo regional y nacional. Cuenta con programas acreditados y vínculos con instituciones internacionales para proyectos de investigación y movilidad estudiantil.'
    }
    
    
    
    
  ];
  
  
  /**
   * Obtiene todas las universidades disponibles.
   */
  getUniversities(): Observable<University[]> {
    return of(this.universities);
  }

  /**
   * Filtra universidades según los parámetros proporcionados.
   * 
   * @param filters - Objeto con filtros de búsqueda.
   * @returns Lista de universidades filtradas.
   */
  filterUniversities(filters: {
    department?: string;
    province?: string;
    district?: string;
    type?: 'Pública' | 'Privada' | 'Todos';
    career?: string;
  }): Observable<University[]> {
    const filtered = this.universities.filter((university) => {
      const matchesDepartment = !filters.department || filters.department === 'Todos' || university.location.department === filters.department;
      const matchesProvince = !filters.province || filters.province === 'Todos' || university.location.province === filters.province;
      const matchesDistrict = !filters.district || filters.district === 'Todos' || university.location.district === filters.district;
      const matchesType = !filters.type || filters.type === 'Todos' || university.type === filters.type;

      // Filtrar por carrera en las facultades
      const matchesCareer = !filters.career || filters.career === '' || university.faculties.some(faculty =>
        faculty.careers && faculty.careers.includes(filters.career as string) // Asegurar que 'filters.career' sea tratado como un string
        );



      return matchesDepartment && matchesProvince && matchesDistrict && matchesType && matchesCareer;
    });

    return of(filtered);
  }

  getUniversityByName(name: string): Observable<University | null> {
    const university = this.universities.find(u => u.name === name);
    return of(university || null);
  }
}
