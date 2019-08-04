import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private questions = {
    firstName: {
      questionText: 'Please tell me your first name?',
      nextQuestion: 'lastName'
    },
    lastName: {
      questionText: 'Please tell me your last name?',
      nextQuestion: 'problem'
    },
    problem: {
      questionText: 'How can I help you?',
      nextQuestion: 'firstName'
    }
  };

  private chatConversation: any[] = [];
  private currentQuestion: any;

  get chatMessages() {
    const chatMessages = this.chatConversation.flatMap(q => [q.questionText, q.answerText]);
    chatMessages.push(this.currentQuestion.questionText);
    return chatMessages;
  }

  constructor() {
  }

  startConversation() {
    this.currentQuestion = this.questions['firstName']; //tslint:disable-line
  }

  addAnswer(answerText) {
    this.chatConversation.push({...this.currentQuestion, answerText});
    this.currentQuestion = this.questions[this.currentQuestion.nextQuestion];
  }
}
