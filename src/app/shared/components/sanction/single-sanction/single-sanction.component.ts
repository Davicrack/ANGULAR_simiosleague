import { Component } from '@angular/core';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';

@Component({
  selector: 'app-single-sanction',
  standalone: true,
  imports: [],
  templateUrl: './single-sanction.component.html',
  styleUrl: './single-sanction.component.scss'
})
export class SingleSanctionComponent {
  estadoActual :number = 0;
  canShowSecondPage : boolean = false;
  canShowThirdPage : boolean = false;
  canShowFinalPage : boolean = false;
  cambiaPagina(num: number) {
      if(this.estadoActual + num >= 0 &&this.estadoActual + num < 4){
        this.estadoActual += num;
      }
      switch(this.estadoActual){
        case 0:
          this.canShowSecondPage = false;
          this.canShowThirdPage = false;
          this.canShowFinalPage = false;
          break;
        case 1:
          this.canShowSecondPage = true;
          this.canShowThirdPage = false;
          this.canShowFinalPage = false;
          break;
        case 2:
          this.canShowSecondPage = false;
          this.canShowThirdPage = true;
          this.canShowFinalPage = false;
          break;
        case 3:
          this.canShowFinalPage = true;
          this.canShowSecondPage = false;
          this.canShowThirdPage = false;
          //this.setRed();
          break;

      }
  }
  listInfo!: HTMLElement;
  nextBtn!: HTMLButtonElement;
  listImg!: HTMLElement;
  prevBtn!: HTMLButtonElement;
  bgs!: NodeListOf<HTMLElement>;

  index: number = 0;

  ngAfterViewInit() {
    // Asegúrate de que el DOM esté completamente cargado antes de manipularlo
    this.listInfo = document.querySelector('.content-info') as HTMLElement;
    this.nextBtn = document.querySelector('.next-btn') as HTMLButtonElement;
    this.listImg = document.querySelector('.slider-img') as HTMLElement;
    this.prevBtn = document.querySelector('.prev-btn') as HTMLButtonElement;
    this.bgs = document.querySelectorAll('.bg') as NodeListOf<HTMLElement>;

    // Añade los event listeners
    if (this.nextBtn && this.prevBtn && this.listInfo && this.listImg && this.bgs) {
      this.nextBtn.addEventListener('click', () => this.nextSlide());
      this.prevBtn.addEventListener('click', () => this.prevSlide());
    }
    this.cambiaPagina(0);
  }
  green!: HTMLElement;
  bgChange!: HTMLElement;
  setGreen(){
    setTimeout(() => {
      this.green = document.querySelector('.check-mark') as HTMLElement;
      this.bgChange = document.querySelector('#veredict') as HTMLElement; 

      if (this.green && this.bgChange) {
        this.green.classList.add('green');
        this.bgChange.classList.add('veredictGreen');
      } else {
        alert("No se encontraron los elementos necesarios en el DOM.");
      }
    },100);
  }
  setRed(){
    setTimeout(() => {
      this.green = document.querySelector('.check-mark') as HTMLElement;
      this.bgChange = document.querySelector('#veredict') as HTMLElement; 

      if (this.green && this.bgChange) {
        this.green.classList.add('red');
        this.bgChange.classList.add('veredictRed');
      } else {
        alert("No se encontraron los elementos necesarios en el DOM.");
      }
    },100);
  }
  nextSlide() {
    this.index = Math.min(this.index + 1, this.bgs.length - 1);
    if (this.listInfo) this.listInfo.style.transform = `translateY(${this.index * -25}%)`;
    if (this.listImg) this.listImg.style.transform = `translateY(${this.index * -100}%)`;

    this.bgs.forEach((bg, i) => bg.classList.toggle('active', i === this.index));
  }

  prevSlide() {
    this.index = Math.max(this.index - 1, 0);
    if (this.listInfo) this.listInfo.style.transform = `translateY(${this.index * -25}%)`;
    if (this.listImg) this.listImg.style.transform = `translateY(${this.index * -100}%)`;

    this.bgs.forEach((bg, i) => bg.classList.toggle('active', i === this.index));
  }
}
