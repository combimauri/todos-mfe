import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatTableModule } from '@angular/material/table';

export interface PeriodicElement {
  todo: string;
  position: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, todo: 'Apples'},
  { position: 2, todo: 'Bread'},
  { position: 3, todo: 'Sauce'},
  { position: 4, todo: 'Eggs'},
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatTableModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  displayedColumns: string[] = ['position', 'todo'];
  dataSource = ELEMENT_DATA;
}
