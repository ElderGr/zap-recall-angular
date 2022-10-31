import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IQuestions } from '../types';
import { defaultQuestionsValues } from './questions-list.constants';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css']
})

export class QuestionsListComponent implements OnInit {

  @Output() goBackHome = new EventEmitter();

  questions: IQuestions[] = defaultQuestionsValues

  awnsers: string[] = []

  selectedQuestion: IQuestions = {} as IQuestions

  constructor() { }

  ngOnInit(): void {
    this.questions = this.questions.sort(() => Math.random() - 0.5)
  }

  handleQuestionResult(obj: IQuestions){
    this.awnsers = [...this.awnsers, obj.awnser]
    this.questions = this.questions.map(question => {
      if(question.id === obj.id){
        return {
          ...question,
          isRight: obj.awnser
        }
      }

      return question
    })
  }

  handleSelectQuestion(question: IQuestions){
    this.selectedQuestion = question
  }

  handleResetQuestions(){
    this.awnsers = []
    this.questions = defaultQuestionsValues
    this.goBackHome.emit()
  }
}
