import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  page: string = 'home'

  constructor() { }

  ngOnInit(): void {
  }

  chooseQuizz() {
    this.page = 'quizz'
  }

  goBackHome() {
    this.page = 'home'
  }
}
