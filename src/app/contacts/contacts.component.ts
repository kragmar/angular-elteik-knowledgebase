import {Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, MatSortable } from '@angular/material/sort';

export interface ContactsTable {
  nev: string;
  email: string;
  szoba: string;
  egyeb: string;
}

const ELEMENT_DATA: ContactsTable[] = [
  {nev: 'Ex Ample', email: 'ex(AT)mple(DOT)hu' , szoba: '101', egyeb: 'lol'},
  {nev: 'Csa Csi', email: 'cs(AT)csi(DOT)hu' , szoba: '69', egyeb: 'kek'},
  {nev: 'Kecske Béka', email: 'pld(AT)mple(DOT)hu' , szoba: '420', egyeb: 'bur'}
];
/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-contacts',
  styleUrls: ['./contacts.component.css'],
  templateUrl: './contacts.component.html',
})
export class ContactsComponent implements OnInit {

  displayedColumns: string[] = ['nev', 'email', 'szoba', 'egyeb'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.sort.sort(({id: 'nev', start: 'asc'}) as MatSortable);
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  changeEmail(value: string): string {
    value = value.replace(/\((AT)+\)/g, "@");
    value = value.replace(/\((DOT)+\)/g, ".");

    return value;
  }

  resetEmail(value: string): string {
    value = value.replace(/@/g, "(AT)");
    value = value.replace(/\./g, "(DOT)");

    return value;
  }

}
