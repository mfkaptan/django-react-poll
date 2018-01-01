

const API_BASE = "http://localhost:8000/api/v1/";
const CHOICES = "choices/";
const QUESTIONS = "questions/";
const VOTE = "/vote/";


export function GetAllQuestions() {
  return fetch(API_BASE + QUESTIONS)
    .then((response) => response.json())
}

export function PostQuestion(question) {
  return fetch(API_BASE + QUESTIONS, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(question)
  })
}

export function VoteChoice(choiceId) {
  return fetch(API_BASE + CHOICES + choiceId + VOTE, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }).then((response) => response.json())
}
