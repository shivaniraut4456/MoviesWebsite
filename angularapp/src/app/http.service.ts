import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
   apiKey = '5c06fed2cdf4dfcdab132d9e67c1c2e7'
   apiUrl = 'https://api.themoviedb.org/3' 
  public keyupSubject = new Subject<any> ()
  http: any;
  endpoint: any;
  constructor(private httpClient: HttpClient) { }

  fetchMovies(search: string) : Observable<any> {
    const url = `${this.apiUrl}/search/movie?api_key=${this.apiKey}&language=en-US&query=${search}`;
    
   return this.httpClient.get<any>(environment.endpoint + {search});
  }


  // fetchMovies(search: string): Observable<any> {
  //   const url = `${this.apiUrl}/search/movie?api_key=${this.apiKey}&language=en-US&query=${search}`;
  //   return this.http.get(url);
  


  fetchMovieDetails(movieId: number): Observable<any> {
    // Implementation for fetching details of a specific movie
    const url = `${this.apiUrl}/movie/${movieId}?api_key=${this.apiKey}&language=en-US`;
    // return this.http.get(url);
    return this.httpClient.get<any>(environment.endpoint + movieId);

  }

  fetchPopularMovies(movieDetails : string): Observable<any> {
    const url = `${this.apiUrl}/discover/movie?api_key=${this.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
    // return this.http.get(url);
    return this.httpClient.get<any>(environment.endpoint + movieDetails);

  }

}
