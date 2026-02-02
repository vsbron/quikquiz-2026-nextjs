function QuestionsDisplay({ questions }: { questions: Question[] }) {
  // Returned JSX
  return (
    <div className="flex flex-col gap-12">
      {questions.map(({ question, answers, image }) => (
        <div key={question}>
          <h2 className="mb-5">{question}</h2>
          <div className="grid grid-cols-2 gap-4">
            {answers.map((answer) => (
              <div key={answer}>{answer}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default QuestionsDisplay;
