import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-workshops',
  templateUrl: './workshops.component.html',
  styleUrls: ['./workshops.component.css']
})
export class WorkshopsComponent implements OnInit {


  workshops: any[];
  filteredWorkshops: any[];

  filtersActive = false;
  nameSorting = 'default';
  naziv = "";
  mesto = "";

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getWorkshops().subscribe(
      data => {
        this.workshops = data;
        this.filteredWorkshops = data;
      }
    )
  }

  sortAndFilter() {

    // structuredClone(nesto) - pravimo kopiju tog elementa
    let tmpArray = structuredClone(this.workshops);

    if(this.nameSorting === 'asc') {
      tmpArray = tmpArray.sort((a,b) => a.naziv > b.naziv ? 1 : -1)
    }

    if(this.nameSorting === 'desc') {
      tmpArray = tmpArray.sort((a,b) => a.naziv > b.naziv ? -1 : 1)
    }

    if(this.naziv) {
      tmpArray = tmpArray.filter(workshop => workshop.naziv.includes(this.naziv));
    }

    if(this.mesto) {
      tmpArray = tmpArray.filter(workshop => workshop.mesto.includes(this.mesto));
    }
    
    this.filteredWorkshops = tmpArray;

  }

  changeSort(type: string) {
    this.nameSorting = type;
    this.sortAndFilter();
  }

}
