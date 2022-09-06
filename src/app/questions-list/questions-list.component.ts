import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css']
})
export class QuestionsListComponent implements OnInit {
  questions: any = [
    { id: 1, name: 'Pergunta 1', text: 'O que é JSX?', awnser: 'JSX é uma sintaxe para escrever HTML dentro do JS', isRight: null},
    { id: 2, name: 'Pergunta 2', text: 'O que é JSX?', awnser: 'JSX é uma sintaxe para escrever HTML dentro do JS', isRight: null},
    { id: 3, name: 'Pergunta 3', text: 'O que é JSX?', awnser: 'JSX é uma sintaxe para escrever HTML dentro do JS', isRight: null},
    { id: 4, name: 'Pergunta 4', text: 'O que é JSX?', awnser: 'JSX é uma sintaxe para escrever HTML dentro do JS', isRight: null},
  ]

  selectedQuestion: any = {}

  constructor() { }

  ngOnInit(): void {

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
