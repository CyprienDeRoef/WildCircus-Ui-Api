import { Artist } from '../models/artist.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  constructor(public http: HttpClient) { }

  public getListArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>(`http://localhost:3000/api/artists`);
  }

  public getArtist(id: string): Observable<Artist> {
    return this.http.get<Artist>(`http://localhost:3000/api/artists/${id}`);
  }

  public postArtist(artist: Artist): Observable<Artist> {
    return this.http.post<Artist>(`http://localhost:3000/api/artists`, artist);
  }

  public deleteArtist(id: string): Observable<Artist> {
    return this.http.delete<Artist>(`http://localhost:3000/api/artists/${id}`);
  }
}
