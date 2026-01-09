import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-chisiamo',
  imports: [RouterLink],
  templateUrl: './chisiamo.html',
  styleUrl: './chisiamo.css',
})
export class Chisiamo implements OnInit {

  ngOnInit(): void {
    window.scroll(0,0);
  }

}