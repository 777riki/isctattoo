import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer implements OnInit {

  currentYear: WritableSignal<number> = signal<number>(0);

  ngOnInit(): void {
    this.currentYear.set(new Date().getFullYear());
  }

}
