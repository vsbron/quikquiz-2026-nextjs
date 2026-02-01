function HowToPlayPage() {
  // Returned JSX
  return (
    <section>
      <h1>How to play</h1>
      <ol className="flex flex-col gap-1">
        <li>
          <b>Choose a category</b>
          <br />
          Pick a quiz category that matches your interests.
        </li>
        <li>
          <b>Select difficulty</b>
          <br />
          Each category has two difficulty levels - choose what suits you best.
        </li>
        <li>
          <b>Answer the questions</b>
          <br />
          Read each question carefully and select one answer. No rush - take
          your time.
        </li>
        <li>
          <b>Finish the quiz</b>
          <br />
          Once all questions are answered, your quiz is complete.
        </li>
        <li>
          <b>View your results</b>
          <br />
          See how you did, check your score, and review your answers.
        </li>
      </ol>
      <p>
        💡 Tip: Results are only available after completing a quiz - no skipping
        ahead 😉
      </p>
      <p>
        Have fun, trust your instincts, and don&apos;t overthink it. It&apos;s
        all about enjoying the quiz.
      </p>
    </section>
  );
}

export default HowToPlayPage;
