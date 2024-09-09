import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-primeiro-componente',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './primeiro-componente.component.html',
  styleUrl: './primeiro-componente.component.css'
})
export class PrimeiroComponenteComponent {
  aluno: string = "Lucas Queiroz de Lima";
  idade: number = 18;
  turma: string = "DS || Terceiro módulo || Noite";

  //--------------------------------------------

  mensagem()
  {
    alert("Calculadora")
  }

  //--------------------------------------------

   imagem: string = "https://cdn-icons-png.flaticon.com/512/43/43097.png";
   imagem1: string = "https://cdn-icons-png.flaticon.com/512/54/54414.png";

   alterarImagem()
   {
    if(this.imagem === 'https://cdn-icons-png.flaticon.com/512/43/43097.png') {

      this.imagem = 'https://cdn-icons-png.flaticon.com/512/3/3740.png';
    } else { 
      this.imagem = 'https://cdn-icons-png.flaticon.com/512/43/43097.png'
    }

    if(this.imagem1 === 'https://cdn-icons-png.flaticon.com/512/54/54414.png') {

      this.imagem1 = 'https://cdn-icons-png.flaticon.com/512/43/43625.png';
    } else {
      this.imagem1 = 'https://cdn-icons-png.flaticon.com/512/54/54414.png'
    }
  }

  //----------------------------------------------

  numero1: number = 0;
  numero2: number = 0;
  resultados: number [] = [];
  

  calculo()
  {
    this.resultados[0] = this.numero1 + this.numero2; 
    this.resultados[1] = this.numero1 - this.numero2;
    this.resultados[2] = this.numero1 * this.numero2;
    this.resultados[3] = this.numero1 / this.numero2;
  }

}
