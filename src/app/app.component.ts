import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: Posts[] = [];

  constructor(public loaderService: LoaderService, private http: HttpClient) { }

  ngOnInit(): void {
    const apiUrl:string = 'https://jsonplaceholder.typicode.com/posts'
    this.http.get<Posts[]>(apiUrl).subscribe(result => {
      this.posts = result;
    })
  }
}

export interface Posts {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
}
