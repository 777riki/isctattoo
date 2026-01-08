import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery implements OnInit {

  ngOnInit(): void {
    window.scroll(0,0);
  }

}