import { Component, OnInit } from '@angular/core';
import { CinemaService } from '~/cinema.service';

@Component({
  selector: 'app-cinema-list',
  templateUrl: './cinema-list.component.html',
  styleUrls: ['./cinema-list.component.css'],
  moduleId: module.id,
})
export class CinemaListComponent implements OnInit {
  cinemas;

  constructor(private cinemaService : CinemaService) { }

  ngOnInit() {

    this.cinemas = this.cinemaService.getCinemas('london');
    

  }

}
