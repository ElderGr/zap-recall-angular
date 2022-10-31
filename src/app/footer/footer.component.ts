import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { IQuestions } from '../types';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnChanges {

  @Input() questions: IQuestions[] = []
  @Input() awnsers: string[] = []
  @Output() handleResetQuestions = new EventEmitter()

  askedQuestions: string[] = []
  titleResult: string = '';
  textResult: string = '';

  constructor() { }

  ngOnInit(): void {
    this.handleFinalResult()
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.askedQuestions = changes['awnsers'].currentValue

    this.handleFinalResult()
  }

  handleFinalResult(){
    if(this.askedQuestions.length === this.questions.length){
      const hasIncorretAwnser = this.questions.find(question => question.isRight === "not-remember")
      console.log(hasIncorretAwnser)

      if(hasIncorretAwnser){
        this.titleResult = '😥 Putz'
        this.textResult = 'Ainda faltam alguns... Mas não desanime!'
      }else{
        this.titleResult = '🥳 Parabéns!'
        this.textResult = 'Você não esqueceu de nenhum flashcard!'
      }
    }
  }

  handleReset(){
    this.handleResetQuestions.emit()
  }
}
