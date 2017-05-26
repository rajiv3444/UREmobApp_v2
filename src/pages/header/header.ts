import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.html',
})
export class HeaderPage {
@Input() headerTitle: string;
 constructor() {    
  }

}
