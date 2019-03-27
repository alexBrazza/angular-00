import { Component, OnInit } from '@angular/core';
import { Button } from 'protractor';

@Component({
  selector: 'app-user-profiles',
  templateUrl: './user-profiles.component.html',
  styleUrls: ['./user-profiles.component.css']
})
export class UserProfilesComponent implements OnInit {
  
    name= 'Doe'
    firstName= 'John'
    age= 25
    quote= ''
    photo= 'https://randomuser.me/api/portraits/lego/2.jpg'
    hidden=true
  
  constructor() { }
 
  ngOnInit() {
  }
  
hide(){
  const Age1 = document.getElementById('Age');
  const btn = document.getElementById('ID')
  btn.addEventListener('click', () => {
    Age1.style.display = 'none' ;
});
}

}
