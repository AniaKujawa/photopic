import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

public albumId: string;
public photos: Array<{ title: string, albumId: string, src: string }>

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.albumId = this.route.snapshot.paramMap.get('albumId');
    fetch(`https://jsonplaceholder.typicode.com/photos`)
    .then((res) => res.json())
    .then((photos) => {
       this.photos = photos
      .filter((photo) => photo.albumId == this.albumId)
      .map((photo) => {
        return { title: photo.title, albumId: photo.albumId, src: photo.url }
         });
    })
    .catch((err) => console.log(err))
  }

}
