import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  scrollToContacts() {
    let contactsId = document.getElementById('contacts');
    if (contactsId != null) {
      contactsId.scrollIntoView({behavior: 'smooth'});
    } else {
      window.location.href = 'http://localhost:4200/#contacts';
    }
  }
}
