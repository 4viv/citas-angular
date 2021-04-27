import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-listar-citas',
  templateUrl: './listar-citas.component.html',
  styleUrls: ['./listar-citas.component.css']
})
export class ListarCitasComponent implements OnInit {

@Input() listaCitas: any;
@Output() indexcita = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteCita(index: number){
    this.indexcita.emit(index);
  }

}
