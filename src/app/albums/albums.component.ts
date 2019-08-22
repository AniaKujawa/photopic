import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

public userId: string;
public albums: Array<{ title: string, albumId: string, src: string }>

constructor(private route: ActivatedRoute, private router: Router) {}

ngOnInit() {
   this.userId = this.route.snapshot.paramMap.get('id');
    fetch(`https://jsonplaceholder.typicode.com/albums`)
    .then((res) => res.json())
    .then((albums) => {
       this.albums = albums
      .filter((album) => album.userId == this.userId)
      .map((album) => {
        return { title: album.title, albumId: album.id }
         });

        fetch(`https://jsonplaceholder.typicode.com/photos`)
        .then((res) => res.json())
        .then((photos) => { for (let album of this.albums) {
          const filtered = photos
          .filter((photo) => photo.albumId == album.albumId);
          album.src = filtered[0].url
        }
      })
    })
    .catch((err) => console.log(err))
  }

  handleAlbumClick(albumId) {
    this.router.navigate([`/user/photos/${albumId}`]);
  }

}
