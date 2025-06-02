import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Evento  {
  nombre?: string,
  descripcion?: string,
  fecha?: string,
  tipo?: string,
  estado?: string
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private arrEventos: Evento[] = [];
  public getArrEventos() {
    return this.arrEventos;
  }
  private nuevoEvento: Evento = {};
  public getNuevoEvento() {
    return this.nuevoEvento;
  }
  private eventoActualizado: Evento = {};

  private mostrarFormulario: boolean = false;
  public getMostrarFormulario() {
    return this.mostrarFormulario;
  }
  public setMostrarFormulario(mostrarFormulario: boolean) {
    this.mostrarFormulario = mostrarFormulario;
  }
  private editandoEvento: boolean = false;


  agregarEvento() {
    if (this.editandoEvento) {
      this.eventoActualizado.nombre = this.nuevoEvento.nombre;
      this.eventoActualizado.descripcion = this.nuevoEvento.descripcion;
      this.eventoActualizado.fecha = this.nuevoEvento.fecha;
      this.eventoActualizado.tipo = this.nuevoEvento.tipo;
      this.eventoActualizado.estado = this.nuevoEvento.estado;
    }
    else {
      this.arrEventos.push(this.nuevoEvento);
      this.nuevoEvento = {};
    }
    this.editandoEvento = false;
    this.mostrarFormulario = false;
  }

  eliminarEvento(evento: Evento) {
    let eventoIndice = this.arrEventos.indexOf(evento);
    this.arrEventos.splice(eventoIndice, 1);
  }
  editarEvento(evento: Evento) {
    this.nuevoEvento = { ...evento };
    this.eventoActualizado = evento;
    this.mostrarFormulario = true;
    this.editandoEvento = true;
  }

}
