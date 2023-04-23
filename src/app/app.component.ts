import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showHideSideBar : boolean = false;
  title = 'gestionStockApp';

  onShowSideBarChange(showHideSideBar : boolean){
     this.showHideSideBar = showHideSideBar;
  }
}
