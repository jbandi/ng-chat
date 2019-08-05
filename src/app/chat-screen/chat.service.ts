import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private questions = {
    firstName: {
      questionText: 'Please tell me your first name?',
      questionType: 'text',
      nextQuestion: 'lastName'
    },
    lastName: {
      questionText: 'Please tell me your last name?',
      questionType: 'text',
      nextQuestion: 'problem'
    },
    problem: {
      questionText: 'How can I help you?',
      questionType: 'choice',
      options: ['Accident', 'Breakdown'],
      nextQuestion: 'firstName'
    }
  };

  private chatConversation: any[] = [];
  currentQuestion: any;

  constructor() {
  }

  get chatMessages() {
    const chatMessages = this.chatConversation.flatMap(q => [q.questionText, q.answerText]);
    chatMessages.push(this.currentQuestion.questionText);
    return chatMessages;
  }

  startConversation() {
    this.currentQuestion = this.questions['firstName']; //tslint:disable-line
  }

  addAnswer(answerText) {
    this.chatConversation.push({...this.currentQuestion, answerText});
    this.currentQuestion = this.questions[this.currentQuestion.nextQuestion];
  }
}
