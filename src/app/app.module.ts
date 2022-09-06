import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home/home.component';
import { QuestionsListComponent } from './questions-list/questions-list.component';
import { QuestionComponent } from './question/question.component';

@NgModule({
  declarations: [
    HomeComponent,
    QuestionsListComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
