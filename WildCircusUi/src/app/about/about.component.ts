import { Show } from './../models/show.model';
import { ShowsService } from './../services/shows.service';
import { ArtistsService } from './../services/artists.service';
import { Artist } from './../models/artist.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public artists: Artist[];
  public shows: Show[];
  constructor(public artistService: ArtistsService,
              public showService: ShowsService) { }

  ngOnInit() {
    this.getListArtists();
    this.getListShows();
  }

  getListArtists() {
    this.artistService.getListArtists().subscribe(
      (artists: Artist[]) => {
        this.artists = artists;
      },
    );
  }

  getListShows() {
    this.showService.getListShows().subscribe(
      (shows: Show[]) => {
        this.shows = shows;
      },
    );
  }

}
