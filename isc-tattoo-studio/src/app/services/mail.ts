import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root',
})
export class Mail {

  private service_id = "service_fudclb9";
  private template_id = "template_0dypajd";
  private public_key = "Uw3j_4-L01jNtTBjo";

  async sendEmail(name: string, email: string, phone: string, dimension: string, position: string, notes?: string) {
    if (!name || !email || !phone || !dimension || !position) return;

    try {
      const response = await emailjs.send(
        this.service_id,
        this.template_id,
        {
          name: name,
          email: email,
          phone: phone,
          dimension: dimension,
          position: position,
          notes: notes
        },
        { publicKey: this.public_key }
      );
    } catch (error) {
      console.error(error);
    }
  }
  
}
