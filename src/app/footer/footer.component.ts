import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnChanges {

  @Input() questions: any
  @Input() awnsers: any

  askedQuestions: any = []
  titleResult: string = '';
  textResult: string = '';

  constructor() { }

  ngOnInit(): void {
    this.askedQuestions = this.questions.filter((question: any) => question.isRight !== null)

    if(this.askedQuestions.length === this.questions.length){
      const hasIncorretAwnser = this.questions.find((question: any) => question.isRight === "not-remember")

      if(hasIncorretAwnser){
        this.titleResult = '😥 Putz'
        this.textResult = 'Ainda faltam alguns... Mas não desanime!'
      }else{
        this.titleResult = '🥳 Parabéns!'
        this.textResult = 'Você não esqueceu de nenhum flashcard!'
      }
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.awnsers = changes['questions'].currentValue.filter((question: any) => question.isRight !== null)
  }
}
