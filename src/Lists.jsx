import React from 'react';

const questions = [
    {
        question: 'What is the capital of India?',
        answerOptions: [
            { answerText: 'Hydrabad', isCorrect: false },
            { answerText: 'Agra', isCorrect: false },
            { answerText: 'Delhi', isCorrect: true },
            { answerText: 'Mumbai', isCorrect: false },
        ],
    },
    {
        question: 'Who is CEO of Tesla?',
        answerOptions: [
            { answerText: 'Jeff Bezos', isCorrect: false },
            { answerText: 'Elon Musk', isCorrect: true },
            { answerText: 'Bill Gates', isCorrect: false },
            { answerText: 'Tony Stark', isCorrect: false },
        ],
    },
    {
        question: 'Corona Virus Comes in which year ?',
        answerOptions: [
            { answerText: '2019', isCorrect: true },
            { answerText: '2020', isCorrect: false },
            { answerText: '2021', isCorrect: false },
            { answerText: '2018', isCorrect: false },
        ],
    },
    {
        question: 'The Hottest Planet in the solar system ?',
        answerOptions: [
            { answerText: 'Mercury', isCorrect: false },
            { answerText: 'Mars', isCorrect: false },
            { answerText: 'Jupiter', isCorrect: false },
            { answerText: 'Venus', isCorrect: true },
        ],
    },
    {
        question: 'Frist China War is fought between ?',
        answerOptions: [
            { answerText: 'China and Egypt', isCorrect: false },
            { answerText: 'China and Greek', isCorrect: false },
            { answerText: 'China and France', isCorrect: false },
            { answerText: 'China and Britian', isCorrect: true },
        ],
    },
    {
        question: 'Who INteroduce the Pyhton Language ?',
        answerOptions: [
            { answerText: 'Bjrane Stroustrup', isCorrect: false },
            { answerText: 'Guido van Rossum', isCorrect: true },
            { answerText: 'Steve Wozniak', isCorrect: false },
            { answerText: 'Dennis Ritchie', isCorrect: false },
        ],
    },
    {
        question: 'Who INteroduce the React Framework ?',
        answerOptions: [
            { answerText: 'Apple', isCorrect: false },
            { answerText: 'Facebook', isCorrect: true },
            { answerText: 'Instagram', isCorrect: false },
            { answerText: 'Google', isCorrect: false },
        ],
    },
];

export default questions