import { Component } from '@angular/core';
import { Driver } from '../../models/driver.module';
import { DriverService } from '../../../core/services/JSON-Reader/driver-JSON/driver.service';
import { MatTableModule } from '@angular/material/table';
import { animate } from '@angular/animations';

@Component({
  selector: 'app-driver',
  standalone: true,
  imports: [MatTableModule,],
  templateUrl: './driver.component.html',
  styleUrl: './driver.component.scss'
})
export class DriverComponent {

  driverData! : Driver[];
  
  limitedDriverData! : Driver[];
  constructor(private driverService : DriverService){};

  
  ngAfterViewInit(){
  }
  ngOnInit(): void{
    this.getDriversTable();
    
    const previousButton = document.getElementById('prevButton') as HTMLButtonElement;
    previousButton.disabled = true
  }

  getDriversTable() : void {
    this.driverService.getDrivers().subscribe(
      data =>{
        this.driverData = data;
        this.setDataLimit();
        this.animateAllParagraphsRush();
      }
    );
  }
  actualIndex : any = 0;
  setDataLimit() : void{
    this.limitedDriverData = this.driverData.slice(this.actualIndex,this.actualIndex+7);
  }


  isRotated : boolean = false;
  desaparecerDiv(){
    const div = document.getElementById('uno');
    const p = document.querySelectorAll('p')
    if (!this.isRotated) {
      div!.classList.add('card-rotate');
      this.isRotated = true;
    } else {
        div!.classList.remove('card-rotate');
        this.isRotated = false;
    }
  }

  addParagraphs(){
    
    const previousButton = document.getElementById('prevButton') as HTMLButtonElement;
    const nextButton = document.getElementById('nextButton') as HTMLButtonElement;
    if(previousButton.disabled){
      previousButton.disabled = false;
    }
    if(this.driverData.length > this.actualIndex+7){
     
      this.actualIndex+=7;
      this.setDataLimit();
      this.animateAllParagraphs();
    }else{
      this.actualIndex += 7;
      
      this.setDataLimit();
      this.animateAllParagraphs();
      nextButton.disabled= true;
    }
    if(this.actualIndex + 7 >= this.driverData.length){
      nextButton.disabled=true;
    }
    alert("ENTRO NORMAL PORQUE " + this.driverData.length + " " + this.actualIndex)
  }

  removeParagraphs(){
   
    const nextButton = document.getElementById('nextButton') as HTMLButtonElement;
    if(nextButton.disabled){
      nextButton.disabled = false;
    }
    const previousButton = document.getElementById('prevButton') as HTMLButtonElement;
    const paragraphs = document.querySelectorAll('p');
    if(this.actualIndex-7 <= 0){
      this.actualIndex = 0;
      this.setDataLimit();
      this.animateAllParagraphs();
      previousButton.disabled = true;
    }else{
      this.actualIndex-=7;
    }
    this.setDataLimit();
    this.animateAllParagraphs();
    alert("ENTRO NORMAL PORQUE " + this.driverData.length + " " + this.actualIndex)
  }
  canAnimate : boolean = true;
  animateAllParagraphs(){
    if(this.canAnimate){
      this.canAnimate = false;
      const paragraphs = document.querySelectorAll('p');

      paragraphs.forEach((paragraph, index) => {
        setTimeout(() => {
          paragraph.classList.add('p-animate');
          
          // Cambia el texto después de 0.5 segundos
          setTimeout(() => {
            const span = paragraph.querySelector('span') as HTMLElement;
            
            paragraph.style.backgroundImage = `url('${this.limitedDriverData[index].imagePATH}')`;
            span.innerText = `${this.limitedDriverData[index].name}`;
          }, 100); 
        }, index * 100); // Retraso de 3 segundos entre cada <p>
        this.canAnimate = true;
        paragraph.classList.remove('p-animate');
      });
    }
  }

  animateAllParagraphsRush() {
    const paragraphs = document.querySelectorAll('p');

    paragraphs.forEach((paragraph, index) => {
      setTimeout(() => {
        paragraph.classList.add('p-animate');
        
        // Cambia el texto después de 0.5 segundos
        setTimeout(() => {
          const span = paragraph.querySelector('span') as HTMLElement;
          
          paragraph.style.backgroundImage = `url('${this.limitedDriverData[index].imagePATH}')`;
          span.innerText = `${this.limitedDriverData[index].name}`;
        }, 1); // 0.5 segundos
      }, index * 1); // Retraso de 3 segundos entre cada <p>
      paragraph.classList.remove('p-animate');
    });
  }
}
