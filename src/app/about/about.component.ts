import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { About } from './about';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  aboutData: About[] = [];
  constructor(private _http: HttpClient, private _postService: ApiService) {}
  ngOnInit(): void {
    //this.getPost().subscribe((data) => (this.posts = data));
    this._postService.getPosts().subscribe((data) => (this.aboutData = data));
  }

  getPost() {
    return this._http.get<About[]>('http://localhost:6006/about');
  }
}
