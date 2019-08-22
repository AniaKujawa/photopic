import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  users: Array<{id: number, name: string, username: string, email: string}>;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleSubmit(val) {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => {
      this.users = data
      if (this.users.length > 0) {
        const id = this.users.findIndex((user) => user.name.toLowerCase() === val.toLowerCase() || user.email.toLowerCase() === val.toLowerCase() || user.username.toLowerCase() === val.toLowerCase())
        if (id > -1 ) {
          this.router.navigate([`/user/${id + 1}`]);
        }
    }
  })
    .catch((err) => console.log(err))
  }

}
