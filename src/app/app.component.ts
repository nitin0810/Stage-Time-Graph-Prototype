import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  timerId: any;
  arms = [
    {
    name: 'Arm1',
    id: 1,
    lights: [],
  },
  {
    name: 'Arm2',
    id: 1,
    lights: [],
  },
  {
    name: 'Arm3',
    id: 1,
    lights: [],
  }
];

  timeStamps: Array<Date> = [];

  constructor() {

  }

  setTimeStamps() {

    this.timeStamps=[];
    const now = new Date();

    for (let i = 0; i <= 7; i++) {

      const time = new Date(0, 0, 0, now.getHours(), now.getMinutes() - 2 * i, now.getSeconds());
      this.timeStamps.unshift(time);
    }
  }

  startTimer() {
    this.timerId = setInterval(() => {

      this.setTimeStamps();

      this.arms.forEach((arm: any) => {
        const lastColor = arm.lights[arm.lights.length - 1];
        lastColor.width += 10;
      });

    }, 1000);
  }


  onAddColor() {

    clearInterval(this.timerId);

    this.arms.forEach((arm: any) => {
      arm.lights.push({ color: this.giveColor(), width: 0 });
    });

    this.startTimer();
  }


  giveColor() {
    const r = Math.random();
    if (r <= 0.4) {
      return 'red';
    } else if (r > 0.4 && r <= 0.6) {
      return 'green';
    } else {
      return 'yellow';
    }
  }


}
