import React, { useState } from 'react';
import Lists from ".//Lists"

function App() {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < Lists.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
   <React.Fragment>
      <h1 className="text-center">Quiz Competation with ReactJS </h1><hr/>
      <h5 className="sign">By ~ Siddharth Singh (CWSTeam) </h5>
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {Lists.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{Lists.length}
						</div>
						<div className='question-text'>{Lists[currentQuestion].question}</div>
					</div>
					<div className='answer-section'>
						{Lists[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
   </React.Fragment>
	);
}

export default App;