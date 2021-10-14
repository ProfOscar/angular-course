import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '5 INF B 2021/22';

  studentList = [
    { name: 'Ettore Esposito', hobby: 'Karate', gender: 'M', isPro: false },
    { name: 'Luca Pellissero', hobby: 'Paddle', gender: 'M', isPro: false },
    { name: 'Bianca Teleman', hobby: 'Volley', gender: 'F', isPro: false },
    { name: 'Paolo Giordano', hobby: 'Volley', gender: 'M', isPro: false },
    { name: 'Giada Valinotto', hobby: 'Paddle', gender: 'F', isPro: false },
    { name: 'Marta Baudracco', hobby: 'Volley', gender: 'F', isPro: false },
    { name: 'Michele Ghisolfi', hobby: 'Paddle', gender: 'M', isPro: false },
    { name: 'Martina Velardi', hobby: 'Karate', gender: 'F', isPro: false },
    { name: 'Michele Ghisolfi', hobby: 'Paddle', gender: 'M', isPro: false },
    { name: 'Paolo Racca', hobby: 'Paddle', gender: 'M', isPro: false },
    { name: 'Ivan Anjelovski', hobby: 'Karate', gender: 'M', isPro: false },
    { name: 'Gabriele Leone', hobby: 'Volley', gender: 'M', isPro: false },
  ]
}
