        //   k_ci2mm6bz
//'https://imdb-api.com/en/API/SearchMovie/${apiKey}/'


const apiKey = '5c06fed2cdf4dfcdab132d9e67c1c2e7' ;
const  apiUrl ='https://api.themoviedb.org/3';


export const environment = {

   
  production: true,
  endpoint: `${apiUrl}/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`                                                        //'https://imdb-api.com/en/API/SearchMovie/${apiKey}/'
};



// src/environments/environment.ts

