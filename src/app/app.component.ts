import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'cia';


  constructor(private router: Router){

    }

    public goToCreditHistory(pageName:string){
      this.router.navigate([`${pageName}`]);
    }
    
  
}

