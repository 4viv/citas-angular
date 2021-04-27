import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  listCitas: any[] = []; //de tipo Cita

  getCita(cita: any){
    this.listCitas.push(cita);
    console.log(this.listCitas);
    console.log('padre')
  }

  deleteCita(index: number){
    this.listCitas.splice(index, 1);
  }
}
