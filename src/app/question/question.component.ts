import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { IQuestions } from '../types';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() question: IQuestions = {} as IQuestions
  @Input() index: number = 0
  @Output() newQuestionEvent = new EventEmitter();

  isOpen: boolean = false
  showAwnser: boolean = false
  imageSrc: string = ''

  constructor() { }

  ngOnInit(): void {
    this.imageSrc = this.question.isRight === null
      ? "../../assets/question-placeholder.png"
      : `../../assets/${this.question.isRight}-icon.png`
  }

  handleContainerOpen(){
    this.isOpen = !this.isOpen
  }
  toggleAwnser(){
    this.showAwnser = !this.showAwnser
  }

  handleAwnser(awnser: string){
    this.newQuestionEvent.emit({
      id: this.question.id,
      awnser
    })

    this.showAwnser = false
    this.isOpen = false
  }
}
