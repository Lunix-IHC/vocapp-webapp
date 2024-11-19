import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TestService } from '../../../../shared/services/test.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Answer } from '../../../../shared/models/answer';

@Component({
  selector: 'app-test-1',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './test-1.component.html',
  styleUrls: ['./test-1.component.css']
})

export class Test1Component implements OnInit {
  step: number = 1;
  testid: number = localStorage.length;
  answers:number[]=[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  questions:string[] = [
    'Me interesa aprender cómo administrar finanzas personales o empresariales.', //Negocios
    'Me interesa investigar cómo funcionan los sistemas políticos y económicos.', //Ciencias Sociales
    'Disfruto planificar y organizar eventos o actividades.', //Negocios
    'Me interesa experimentar y probar hipótesis científicas.', // Ciencias y Matemáticas
    'Me interesa programar o crear aplicaciones tecnológicas.', // Tecnología
    'Disfruto tocar un instrumento musical o cantar.', // Creatividad
    'Me gusta debatir sobre temas sociales o éticos.', // Ciencias Sociales
    'Disfruto resolver problemas relacionados con hardware o software.', // Tecnología
    'Me gusta liderar equipos y tomar decisiones importantes.', // Negocios
    'Me siento atraído/a por trabajar en proyectos que promuevan la justicia social.', // Ciencias Sociales
    'Me siento atraído/a por resolver problemas matemáticos complejos.', // Ciencias y Matemáticas
    'Disfruto leer y analizar textos filosóficos, literarios o históricos.', // Ciencias Sociales
    'Me atraen los desafíos relacionados con ventas o marketing.', // Negocios
    'Me siento cómodo/a trabajando con herramientas tecnológicas avanzadas.', // Tecnología
    'Disfruto ayudar a las personas a resolver sus problemas.', // Comunicación
    'Disfruto crear contenido visual o multimedia (videos, fotografías, diseño).', // Creatividad
    'Me gusta trabajar en equipo y colaborar con otros en proyectos.', // Comunicación
    'Me siento cómodo/a expresándome a través de las artes escénicas, como teatro o danza.', // Creatividad
    'Me gusta analizar datos y encontrar patrones en la información.', // Ciencias y Matemáticas
    'Me atrae la idea de iniciar mi propio negocio o emprendimiento.', // Negocios
    'Me interesa la tecnología y su impacto en la sociedad.', // Ciencias y Matemáticas
    'Me interesa aprender sobre culturas, historia o tradiciones de otras sociedades.', // Ciencias Sociales
    'Me gusta dibujar, pintar o hacer manualidades.', // Creatividad
    'Me interesa escuchar las historias y experiencias de otras personas.', // Comunicación
    'Me atrae la idea de construir o mejorar sistemas automatizados.', // Tecnología
    'Disfruto enseñar o explicar temas a otras personas.', // Comunicación
    'Me interesa escribir cuentos, poemas o artículos.', // Creatividad
    'Me interesa el diseño de videojuegos o entornos interactivos.', // Tecnología
    'Disfruto entender cómo funcionan las cosas desde una perspectiva técnica o científica.', // Ciencias y Matemáticas
    'Me siento cómodo/a hablando frente a un grupo grande de personas.' // Comunicación
  ]

  //para el ngfor
  range(start: number, end: number): number[] {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }
  
  constructor(private _router: Router, private testService: TestService) {}

  //para el input range
  onRangeChange(event: Event, index: number): void {
    const inputValue = (event.target as HTMLInputElement).value;
    console.log(`Valor cambiado en el índice ${index}:`, inputValue);
  }

  ngOnInit() {
    this.testService.getStep().subscribe((step) => {
      this.step = step
    });
    this.answers = this.testService.getAnswers();
  }

  saveinlocal(){
    localStorage.setItem('test'+this.testid,JSON.stringify(this.answers));
    this.testid++;
  }

  
  navigateToNext() {
    if (this.step < 6) {
      this.testService.setStep(this.step + 1);
    } else {
      this.saveinlocal()
      this._router.navigate(['home/student/show-results/'+ (localStorage.length-1)]);
    }
  }

  navigateToBack() {
    if (this.step > 1) {
      this.testService.setStep(this.step - 1);
    } else {
      this._router.navigate(['home/student/test']);
    }
  }
}