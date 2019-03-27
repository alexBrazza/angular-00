import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  email = 'email';
  songList:string[]=["Alejandro", "Le temps est bon"]
  constructor() { }

  ngOnInit() {
  }

}
