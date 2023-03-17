import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  load = true;

  ngOnInit(): void {
    console.log(this.load);

     setTimeout(() =>{
      this.load = false;
     },5000)
  }
  title = 'SigmaNg';

  onClick(event:any){
    console.log(event);
  }
}
