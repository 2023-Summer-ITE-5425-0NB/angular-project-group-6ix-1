import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface QuestionType {
  _id: string;
  question: string;
  optA: string;
  optB: string;
  optC: string;
  correctAnswer: string;
}

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css'],
})
export class QuestionListComponent implements OnInit {
  questions: QuestionType[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.sendGetRequest();
  }

  sendGetRequest(): void {
    this.http
      .get<QuestionType[]>('http://localhost:6006/api/question')
      .subscribe(
        (response) => {
          this.questions = response;
          console.log(response)
        },
        (error) => {
          console.log(error);
        }
      );
  }

  calculateResult(): void {
    // TODO:
  }

  sendPostRequest(): void {
    this.http
      .post('http://localhost:6006/api/question', {
        question: 'Being flexible is more important than being organized',
        optA: 'Agree',
        optB: 'Neutral',
        optC: 'Disagree',
        correctAnswer: 'optB',
      })
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
