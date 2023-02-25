import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  // Zamisljamo zahtev ka beku za radionice
  getWorkshops(): Observable<any> {

    return of([
      {
        naziv: 'Radionica 2',
        datum: new Date('2022-11-11'),
        mesto: 'Mladenovac',
        opis: 'askldjsadklsadjsalkdjsadklsadjsakldjasldkasjdalskj',
        slika: 'Slika 1'
      },
      {
        naziv: 'Radionica 1',
        datum: new Date('2021-11-11'),
        mesto: 'Mladenovo',
        opis: 'askldjsadklsadjsalkdjsadklsadjsakldjasldkasjdalskj',
        slika: 'Slika 2'
      },      
      {
        naziv: 'Radionica 3',
        datum: new Date('2020-11-11'),
        mesto: 'Beograd',
        opis: 'askldjsadklsadjsalkdjsadklsadjsakldjasldkasjdalskj',
        slika: 'Slika 3'
      }
    ])

  }
}
