import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TestService } from '../../../shared/services/test.service';

@Component({
  selector: 'app-show-results',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './show-results.component.html',
  styleUrl: './show-results.component.css'
})
export class ShowResultsComponent {
  resultid: string;
  index: number;
  sumCienciasMatematicas: number = 0;
  sumTecnologiaComputacion: number = 0;
  sumCreatividadArtes: number = 0;
  sumComunicacionRelaciones: number = 0;
  sumNegociosEmprendimiento: number = 0;
  sumCienciasSociales: number = 0;
  mensaje: string = '';

  constructor(private _router: Router, private route:ActivatedRoute, private testService: TestService){
    this.route.params.subscribe(params => this.resultid = params['result']);
    this.calculate_sum();
    this.index = this.testService.getTestIndexById(this.resultid) + 1;
  }

  calculate_sum() {
    const resultados = this.testService.getTestById(this.resultid);
    if (resultados) {

        const ciencias_y_matematicas = [4, 11, 19, 21, 29]
        const tecnologia_y_computacion = [5, 8, 14, 25, 28]
        const creatividad_y_artes = [6, 16, 18, 23, 27]
        const comunicacion_y_relaciones = [15, 17, 24, 26, 30]
        const negocios_y_emprendimiento = [1, 3, 9, 13, 20]
        const ciencias_sociales_y_humanidades = [2, 7, 10, 12, 22]


        this.sumCienciasMatematicas = 0;
        this.sumTecnologiaComputacion = 0;
        this.sumCreatividadArtes = 0;
        this.sumComunicacionRelaciones = 0;
        this.sumNegociosEmprendimiento = 0;
        this.sumCienciasSociales = 0;

        for (const [index, answers] of resultados.answers.entries()) {
          if (ciencias_y_matematicas.includes(index + 1)) { 
            this.sumCienciasMatematicas += answers.answer;
          } else if (tecnologia_y_computacion.includes(index + 1)) { 
            this.sumTecnologiaComputacion += answers.answer;
          } else if (creatividad_y_artes.includes(index + 1)) {
            this.sumCreatividadArtes += answers.answer;
          } else if (comunicacion_y_relaciones.includes(index + 1)) {
            this.sumComunicacionRelaciones += answers.answer;
          } else if (negocios_y_emprendimiento.includes(index + 1)) {
            this.sumNegociosEmprendimiento += answers.answer;
          } else if (ciencias_sociales_y_humanidades.includes(index + 1)) {
            this.sumCienciasSociales += answers.answer;
          }
        }

        let mayor = Math.max (this.sumCienciasMatematicas, this.sumTecnologiaComputacion, this.sumCreatividadArtes, this.sumComunicacionRelaciones, this.sumNegociosEmprendimiento, this.sumCienciasSociales)

        if (mayor === this.sumCienciasMatematicas) {
          this.mensaje = 'El tipo predominante es cym.';
        } else if (mayor === this.sumTecnologiaComputacion) {
          this.mensaje = 'El tipo predominante es teccomp.';
        } else if (mayor === this.sumCreatividadArtes) {
          this.mensaje = 'El tipo predominante es cya.';
        } else if (mayor === this.sumComunicacionRelaciones) {
          this.mensaje = 'El tipo predominante es cyr.';
        } else if (mayor === this.sumNegociosEmprendimiento) {
          this.mensaje = 'El tipo predominante es nye.';
        } else if (mayor === this.sumCienciasSociales) {
          this.mensaje = 'El tipo predominante es cs.';
        }

    }
  }
  
  navigateToResultadosGuardados() {
    this._router.navigate(['home/student/resultados-guardados']);
  }
}
