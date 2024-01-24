import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Subscription, debounce, debounceTime, distinctUntilChanged, filter, map, switchMap, tap } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  // title = 'angularapp';
  // // step 1 declare one property
  // sendData = 'The data is coming from parent component'
  // price: any;
  // getDataFromChild(val: any){
  //   console.log('Value coming from child component', val);
  //   this.price = val;
  // }

  // ngOnInit(): void {
  //   //creating observable

  //   const myObservable = new Observable( observer => {
  //     observer.next('Data 1');
  //     observer.error('getting some error');
  //     observer.next('data 2');
  //     observer.complete();
  //   })
  //   myObservable.subscribe((res) => {
  //     console.log(res);
      
  //   })
  // }

  selectedMovieId: number | null = null;
  selectedMovieDetails: any;

  popularMovies: any[] = [];
  isLoadingPopularMovies = true;

title = 'angularapp';
skeletonArI = Array(5);
keyupSubs!: Subscription;
searchResults:any[] = [];
  notFound= false;
  isLoading = false;
  searchString: string = '';

constructor(private httpService: HttpService){

}
ngOnInit(): void {
  this.keyupSubs = this.httpService.keyupSubject
  .pipe(
    map((e:any) => e.target.value),
    filter(Boolean),
    debounceTime(500),
    distinctUntilChanged(),
    tap((str)=>{
      this.searchResults = [];
      this.isLoading = true;
      this.searchString = str;
    }),
    switchMap((search) => this.httpService.fetchMovies(search))
  )
  .subscribe({
    next: (response: any)=>{
      this.notFound= false;
      this.searchResults = [];
     if(response.results.length){
      this.searchResults = response.results;
     }else{
      this.notFound = true;
     }
     this.isLoading = false;
    },
    error: (err) => {
    this.isLoading = false;
    console.log(err);
    
    }
  });
 
  
}

ngOnDestroy(): void {
  if(this.keyupSubs) this.keyupSubs.unsubscribe()
}

onSelectMovie(movieId: number): void {
  this.selectedMovieId = movieId;
  this.httpService.fetchMovieDetails(movieId)
    .subscribe({
      next: (details: any) => {
        this.selectedMovieDetails = details;
      },
      error: (err) => {
        console.log(err);
      }
    });

    
}
fetchPopularMovies(movieDetails: string): void {
  this.isLoadingPopularMovies = true;
  this.httpService.fetchPopularMovies(movieDetails)
    .subscribe({
      next: (response: any) => {
        this.popularMovies = response.results;
        this.isLoadingPopularMovies = false;
      },
      error: (err) => {
        this.isLoadingPopularMovies = false;
        console.log(err);
      }
    });


}

}
