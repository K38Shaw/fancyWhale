import { Component } from '@angular/core';

@Component({
  selector: 'app-whale',
  templateUrl: './whale.component.html',
  styleUrls: ['./whale.component.css']
})
export class WhaleComponent {
isDancing = false;

myWhale = document.getElementById('flowerWhale');

/* Skrdlants Way*/
startDancing(){
  this.isDancing = true;
  setTimeout(() => {
     this.isDancing = false
    }, 4000);

  }

}
