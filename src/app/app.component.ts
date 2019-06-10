import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  state: string = 'menu';
  menuSelected: any = [false, false, false, false, true];
  showIntro: boolean = false;
  contentIntro: boolean = false;
  showSecondIntro: boolean = false;

  constructor() {
    document.body.style.backgroundColor = "#ffffff";

    setTimeout(() => {
      this.contentIntro = true
    }, 3000);

    setTimeout(() => {
      this.showIntro = true;
      document.body.style.backgroundColor = "#949494";
    }, 6000);

    window.onscroll = () => {
      this.showSecondIntro = true;
      var scrollHeight, totalHeight;
      scrollHeight = document.body.scrollHeight;
      totalHeight = window.scrollY + window.innerHeight;

      if (totalHeight + 1 >= scrollHeight && this.menuSelected[4]) {
        window.scroll(0, 0);
      }
    }
  }

  changeMenu(value: string) {
    this.state = value;
    this.changeBackgroundColor();
  }

  changeSelectedMenu(position: number) {
    if (position == 1) {
      this.menuSelected = [true, false, false, false, false];
    } else if (position == 2) {
      this.menuSelected = [false, true, false, false, false];
    } else if (position == 3) {
      this.menuSelected = [false, false, true, false, false];
    } else if (position == 4) {
      this.menuSelected = [false, false, false, true, false];
    }
    this.state = 'menu';
    this.changeBackgroundColor();
  }

  changeBackgroundColor() {
    if (this.state == 'open') {
      document.body.style.backgroundColor = "#f2f2f2";
    } else {
      document.body.style.backgroundColor = "#bfbfbf";
    }
  }


}
