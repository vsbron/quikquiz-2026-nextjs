import Link from "next/link";

function Hero() {
  // Returned JSX
  return (
    <section className="flex flex-col items-center gap-3 my-8">
      <div>Big QuikQuiz logo</div>
      <h1>QuikQuiz</h1>
      <p>
        Welcome to a place where you can test your knowledge by taking fun,
        quick quizzes.
      </p>
      <p>
        Choose from multiple categories, each with two difficulty levels -
        perfect for both casual players and trivia nerds.
      </p>
      <p>
        Start by learning the rules, explore quiz categories, or jump straight
        into a random quiz!
      </p>
      <div className="flex gap-8 mt-5">
        <button>
          <Link href="/categories">Categories</Link>
        </button>
        <button>
          <Link href="/quiz/random">Random quiz</Link>
        </button>
      </div>
    </section>
  );
}

export default Hero;
