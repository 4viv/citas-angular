import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-agregar-cita',
  templateUrl: './agregar-cita.component.html',
  styleUrls: ['./agregar-cita.component.css']
})
export class AgregarCitaComponent implements OnInit {

  @Output() nuevaCita = new EventEmitter<any>();

  nombre = '';
  fecha = '';
  hora = '';
  sintomas = ''
  formIncorrecto = false;

  constructor() { }

  ngOnInit(): void {
  }

  agregarCita(){
    if(this.nombre === '' || this.fecha === '' || this.hora === '' || this.sintomas === ''){
      this.formIncorrecto = true;
      return;
    }
    this.formIncorrecto = false;

    const CITA = {
      nombre: this.nombre,
      fecha: this.fecha,
      hora: this.hora,
      sintomas: this.sintomas
    }
    this.cleanForm();
    this.nuevaCita.emit(CITA);
    //console.log(CITA);
  }

  cleanForm(){
    this.nombre = '';
    this.fecha = '';
    this.hora = '';
    this.sintomas = ''
  }

}
