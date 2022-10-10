import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css']
})

export class QuestionsListComponent implements OnInit {
  questions: any = [
    { id: 1, text: 'O que é JSX?', awnser: 'JSX é uma sintaxe para escrever HTML dentro do JS', isRight: null},
    { id: 2, text: 'O que é React?', awnser: 'JSX é uma sintaxe para escrever HTML dentro do JS', isRight: null},
    { id: 3, text: 'O que é Virtual DOM?', awnser: 'JSX é uma sintaxe para escrever HTML dentro do JS', isRight: null},
    { id: 4, text: 'O que é React Native?', awnser: 'JSX é uma sintaxe para escrever HTML dentro do JS', isRight: null},
  ]

  awnsers: string[] = []

  selectedQuestion: any = {}

  constructor() { }

  ngOnInit(): void {
    this.questions = this.questions.sort(() => Math.random() - 0.5)
  }

  handleQuestionResult(obj: any){
    this.questions = this.questions.map((question: any) => {
      if(question.id === obj.id){
        return {
          ...question,
          isRight: obj.awnser
        }
      }

      return question
    })
  }

  handleSelectQuestion(question: any){
    this.selectedQuestion = question
  }
}
