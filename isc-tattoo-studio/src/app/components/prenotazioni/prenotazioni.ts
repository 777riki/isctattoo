import { Component, inject } from '@angular/core';
import { Mail } from '../../services/mail';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-prenotazioni',
  imports: [FormsModule],
  templateUrl: './prenotazioni.html',
  styleUrl: './prenotazioni.css',
})
export class Prenotazioni {

  mailService: Mail = inject(Mail);

  name: string = '';
  email: string = '';
  phone: string = '';
  dimension: string = '';
  position: string = '';
  notes: string = '';

  sendEmail() {
    this.mailService.sendEmail(this.name, this.email, this.phone, this.dimension, this.position, this.notes);
  }

}
