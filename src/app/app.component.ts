import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  state: string = 'open'
  menuSelected: any = [false, true, false, false]

  changeMenu(value: string) {
    this.state = value;
  }

  changeSelectedMenu(position: number) {
    if (position == 1) {
      this.menuSelected = [true, false, false, false]
    } else if (position == 2) {
      this.menuSelected = [false, true, false, false]
    } else if (position == 3) {
      this.menuSelected = [false, false, true, false]
    } else if (position == 4) {
      this.menuSelected = [false, false, false, true]
    }
    this.state = 'menu';
  }


}
