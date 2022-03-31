import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'People Matching';
  users: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.http.get('https://localhost:7112/api/users').subscribe(
      (response) => {
        this.users = response;
      },
      (error) => console.error(error)
    );
  }
}
