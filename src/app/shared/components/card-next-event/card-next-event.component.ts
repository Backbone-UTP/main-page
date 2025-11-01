import { Component } from '@angular/core';

@Component({
  selector: 'app-card-next-event',
  standalone: true,
  imports: [],
  templateUrl: './card-next-event.component.html',
  styleUrl: './card-next-event.component.scss'
})
export class CardNextEventComponent {
  eventTitle = 'Taller de Contenedores y Kubernetes';
  eventDescription = 'Aprende las bases de contenedores y Kubernetes en este taller intensivo de 4 horas. Requiere conocimiento de terminal. Cupos limitados.';
  eventLocation = '📍 UTP - 3 S107';
  eventDate = '📅 15/Sep - 8:00 AM';
  eventImage = 'https://ausum.cloud/wp-content/uploads/2025/01/Kubernetes-logo.png';
  countdownTime = '01 : 12 : 25 : 50';
  countdownLabels = 'Días : Hrs : Mins : Secs';

  onRegisterClick(): void {
    // Aquí se puede implementar la lógica de registro
    console.log('Registro al evento');
  }
}
