import QuestionsDisplay from "./QuestionsDisplay";
import SectionTitle from "./ui/SectionTitle";

function QuizSection({ questions }: { questions: QuestionsPack }) {
  // Destructure the questions
  const {
    title,
    difficulties: { casual, moderate, pro },
  } = questions;

  // Returned JSX
  return (
    <section>
      <SectionTitle>{`${title} Quiz`}</SectionTitle>
      <QuestionsDisplay questions={casual} />
    </section>
  );
}

export default QuizSection;
