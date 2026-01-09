import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-prenotazioni',
  imports: [FormsModule],
  templateUrl: './prenotazioni.html',
  styleUrl: './prenotazioni.css',
})
export class Prenotazioni implements OnInit {

  showAlert: boolean = false;
  alertMessage: string = '';

  private service_id = "service_fudclb9";
  private template_id = "template_0dypajd";
  private public_key = "Uw3j_4-L01jNtTBjo";

  ngOnInit(): void {
    window.scroll(0,0);
  }

  name: string = '';
  email: string = '';
  phone: string = '';
  dimension: string = '';
  position: string = '';
  notes: string = '';

  async sendEmail() {
    if (!this.name || !this.email || !this.phone || !this.dimension || !this.position) {
      this.alertMessage = 'Devi compilare tutti i campi!';
      this.showAlert = true;
      return;
    };

    try {
      const response = await emailjs.send(
        this.service_id,
        this.template_id,
        {
          name: this.name,
          email: this.email,
          phone: this.phone,
          dimension: this.dimension,
          position: this.position,
          notes: this.notes
        },
        { publicKey: this.public_key }
      );

      // Reset form
      this.name = '';
      this.email = '';
      this.phone = '';
      this.dimension = '';
      this.position = '';
      this.notes = '';

      this.alertMessage = 'Email inviata con successo!';
      this.showAlert = true;
    } catch (error) {
      this.alertMessage = 'Qualcosa è andato storto. Riprova più tardi.';
      this.showAlert = true;
    }
  }

  closeAlert() {
    this.showAlert = false;
  }

}
