import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-show-results',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './show-results.component.html',
  styleUrl: './show-results.component.css'
})
export class ShowResultsComponent {


  resultid: number = -1;
  sumCienciasMatematicas: number = 0;
  sumTecnologiaComputacion: number = 0;
  sumCreatividadArtes: number = 0;
  sumComunicacionRelaciones: number = 0;
  sumNegociosEmprendimiento: number = 0;
  sumCienciasSociales: number = 0;
  mensaje: string = '';

  constructor(private _router: Router, private route:ActivatedRoute){
    this.route.params.subscribe(params => this.resultid = params['result']);
    this.calculate_sum();
  }

  calculate_sum(){
    const resultadoStr = localStorage.getItem('test'+this.resultid);
    if (resultadoStr !== null) {

      const resultados = JSON.parse(resultadoStr);

      //Inisializa tres arrays para las sumas 

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

        for (let i = 0; i < resultados.length; i++) {
          const resultado = resultados[i];

          if (ciencias_y_matematicas.includes(i + 1)) { 
            this.sumCienciasMatematicas += resultado;
          } else if (tecnologia_y_computacion.includes(i + 1)) { 
            this.sumTecnologiaComputacion += resultado;
          } else if (creatividad_y_artes.includes(i + 1)) {
            this.sumCreatividadArtes += resultado;
          } else if (comunicacion_y_relaciones.includes(i + 1)) {
            this.sumComunicacionRelaciones += resultado;
          } else if (negocios_y_emprendimiento.includes(i + 1)) {
            this.sumNegociosEmprendimiento += resultado;
          } else if (ciencias_sociales_y_humanidades.includes(i + 1)) {
            this.sumCienciasSociales += resultado;
          }
        }


        //Encuentre el mayor de las tres sumas 
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
  navigateToTest(){
    this._router.navigate(['home/student/test']);
  }
}
