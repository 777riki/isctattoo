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
    window.scroll(0, 0);
  }

  // Funzione per validare i campi
  private validateFields(): string | null {
    // Nome
    if (!this.name.trim()) return 'Inserisci il nome';
    if (this.name.trim().length < 3) return 'Il nome deve essere di almeno 3 caratteri';
    if (!/^[A-Za-zÀ-ÖØ-öø-ÿ ]+$/.test(this.name)) return 'Il nome può contenere solo lettere e spazi';
    if (this.name.length > 50) return 'Il nome è troppo lungo';
    // Email
    if (!this.email.trim()) return 'Inserisci l\'email';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) return 'Email non valida';
    if (this.email.length > 100) return 'Email troppo lunga';
    // Telefono
    if (!this.phone.trim()) return 'Inserisci il telefono';
    if (!/^[0-9+\- ]{7,15}$/.test(this.phone)) return 'Telefono non valido';
    // Dimensione
    if (!this.dimension.trim()) return 'Inserisci la dimensione';
    if (this.dimension.length > 50) return 'Dimensione troppo lunga';
    // Posizione
    if (!this.position.trim()) return 'Inserisci la posizione';
    if (this.position.length > 50) return 'Posizione troppo lunga';
    // Note (opzionale)
    if (this.notes.length > 500) return 'Le note sono troppo lunghe';

    return null; // tutto ok
  }

  name: string = '';
  email: string = '';
  phone: string = '';
  dimension: string = '';
  position: string = '';
  notes: string = '';

  async sendEmail() {
    const error = this.validateFields();
    if (error) {
      this.alertMessage = error;
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
