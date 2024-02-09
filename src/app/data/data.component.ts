import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Item } from '../Models/data.model';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  items: Item[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.items = data;
    });
  }
}
