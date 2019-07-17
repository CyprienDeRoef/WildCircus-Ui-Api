import { Show } from './../models/show.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ShowsService {

    constructor(public http: HttpClient) { }

    public getListShows(): Observable<Show[]> {
        return this.http.get<Show[]>(`http://localhost:3000/api/shows`);
    }

    public getShow(id: string): Observable<Show> {
        return this.http.get<Show>(`http://localhost:3000/api/shows/${id}`);
    }

    public postShow(show: Show): Observable<Show> {
        return this.http.post<Show>(`http://localhost:3000/api/shows`, show);
    }

    public deleteShow(id: string): Observable<Show> {
        return this.http.delete<Show>(`http://localhost:3000/api/shows/${id}`);
    }
}
