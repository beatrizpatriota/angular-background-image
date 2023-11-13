import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent {
  constructor(private http: HttpClient) { }
  dataImages = [{url:'teste', title: ''}];
  background:any

  ngOnInit() {
    let image = localStorage.getItem('backgroundImage')
    this.background = image
    this.http
      .get<any>('https://api.slingacademy.com/v1/sample-data/photos?offset=0&limit=5')
      .subscribe(data => {
        this.dataImages = data.photos;
      });
  }
  setBackground (value: string) {
    this.background = value
    localStorage.setItem('backgroundImage', JSON.stringify(this.background))
  }
  getMoreImages(page: any) {
    this.http
      .get<any>(`https://api.slingacademy.com/v1/sample-data/photos?offset=${page}&limit=5`)
      .subscribe(data => {
        this.dataImages = data.photos;
      });
  }
}
