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
    }, 3000);

  }

/*My Way */
dance(){
  if(!this.isDancing){
    this.myWhale!.classList.add('dance');
    console.log("I guess I could dance.")
    this.isDancing = true;
  }else{
    this.myWhale!.classList.remove('dance');
    console.log("I will not dance.")
    this.isDancing = false;
  }
}
}
