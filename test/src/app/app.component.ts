import { Component, OnInit } from '@angular/core';
import { CrudService } from './crud/crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'test';

  constructor() { }


  ngOnInit():void{

  }
}
