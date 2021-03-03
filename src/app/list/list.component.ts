import { Component, OnInit } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  users:any = []

  constructor (
    public dialog: MatDialogModule,
    public api: ApiService
  ) {}

  ngOnInit () {
    this.api.getList().subscribe(result => {
      this.users = result;
    })
  }

}
