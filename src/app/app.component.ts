import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  show:boolean;
  buttonName="show";

  ngOnInit() { }

  toggle(){
    this.show = !this.show
    //if we need show and hide buttons 
    if(this.show){
      this.buttonName = "hide";
    }
    else{
       this.buttonName = "show"
    }
  
  }
}
