import { Component } from '@angular/core';
import { Participant } from './participant.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Conferences';
  time: number = 10_000;
  conferences = [
    {
      name: "ngConf",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      location: "Amsterdam",
      startingTime: new Date(2019, 3, 12, 12,12,30),
      capacity: 100
    },
    {
      name: "DevCamp",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      location: "Amsterdam",
      startingTime: new Date(2021, 3, 12, 12,12,30),
      capacity: 10
    }
  ]
  constructor(){
    let interval = setInterval(() =>{ 
      this.time--
      if (this.time === 0) {
        alert('Time is up!');
        clearInterval(interval)
      }
    }, 1000)

  }

}
