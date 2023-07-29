// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-question',
//   templateUrl: './question.component.html',
//   styleUrls: ['./question.component.css']
// })
// export class QuestionComponent {

// }

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  @Input() question: any;
  selectedRadioBtn = '';

  isRadioSelected(value: string): boolean {
    return this.selectedRadioBtn === value;
  }

  handleRadioClick(e: any): void {
    this.selectedRadioBtn = e.target.value;
  }
}

