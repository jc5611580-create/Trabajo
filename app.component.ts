import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';  
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule, CommonModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  texto: string = '';      //Esto sirve para almacenar lo que el usuario escribe en el <input> con [(ngModel)]="texto".
  lista: string[] = [];      // se va a guardar todos lo que el usuario agregue 

  agregarTexto() {
    if (this.texto.trim() === '') return; // Aquí lo que hace es añadir lo que escribe en el input
    this.lista.push(this.texto);
    this.texto = ''; // Después de agregarlo a la lista, se limpia el campo asignándole una cadena vacía.
  }
}