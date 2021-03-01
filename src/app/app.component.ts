import { Component } from '@angular/core';
import dayjs from 'dayjs';

// Error happens here
console.log(dayjs().tz('America/Los_Angeles').format());

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dayjs';
}
