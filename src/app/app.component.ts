import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  result!:string;

  display(val:string)
  {
    if(val=="a")
    {
      this.result="assets/nive.jpg";
    }
    if(val=="b")
    { 
      this.result="assets/rasihaa.jpg";
    }
    if(val=="c")
    {
      this.result="assets/selva.png";
    }
    if(val=="d")
    {
      this.result="assets/sene.jpg";
    }
    
  }
}