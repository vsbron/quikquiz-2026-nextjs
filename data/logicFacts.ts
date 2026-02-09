export const logicFactsQuestions: QuestionsPack = {
  slug: "logic-facts",
  title: "Logic & Facts",
  description:
    "Mind-bending riddles, brain teasers, and surprising facts to stretch your reasoning skills",
  difficulties: {
    casual: [
      {
        id: 1,
        question: "Which number is even?",
        answers: ["8", "7", "9", "11"],
        correctAnswer: "8",
      },
      {
        id: 2,
        question: "What comes next: 2, 4, 6, ?",
        answers: ["8", "9", "10", "7"],
        correctAnswer: "8",
      },
      {
        id: 3,
        question: "Which shape is shown in the image?",
        image: "/quiz/logicFacts/casual-q3.png",
        answers: ["Triangle", "Square", "Circle", "Pentagon"],
        correctAnswer: "Triangle",
      },
      {
        id: 4,
        question: "Which one does not belong?",
        answers: ["Apple", "Banana", "Carrot", "Orange"],
        correctAnswer: "Carrot",
      },
      {
        id: 5,
        question: "How many sides does a hexagon have?",
        answers: ["6", "5", "7", "8"],
        correctAnswer: "6",
      },
      {
        id: 6,
        question: "Which clock is shown in the image?",
        image: "/quiz/logicFacts/casual-q6.png",
        answers: ["3:00", "6:00", "9:00", "12:00"],
        correctAnswer: "3:00",
      },
      {
        id: 7,
        question: "What is half of 100?",
        answers: ["50", "40", "60", "25"],
        correctAnswer: "50",
      },
      {
        id: 8,
        question: "Which is heavier?",
        answers: [
          "1kg of iron",
          "1kg of feathers",
          "They are equal",
          "Depends",
        ],
        correctAnswer: "They are equal",
      },
      {
        id: 9,
        question: "Which number is the largest?",
        answers: ["100", "99", "98", "97"],
        correctAnswer: "100",
      },
      {
        id: 10,
        question: "Which is a prime number?",
        answers: ["7", "9", "12", "15"],
        correctAnswer: "7",
      },
    ],

    moderate: [
      {
        id: 1,
        question: "What comes next: 1, 1, 2, 3, 5, ?",
        answers: ["8", "6", "7", "9"],
        correctAnswer: "8",
      },
      {
        id: 2,
        question:
          "If all Bloops are Razzies and all Razzies are Lazzies, are all Bloops Lazzies?",
        answers: ["Yes", "No", "Only some", "Cannot be determined"],
        correctAnswer: "Yes",
      },
      {
        id: 3,
        question: "Which shape has the most sides?",
        answers: ["Hexagon", "Pentagon", "Octagon", "Heptagon"],
        correctAnswer: "Octagon",
      },
      {
        id: 4,
        question: "Which pattern is shown in the image?",
        image: "/quiz/logicFacts/moderate-q4.png",
        answers: ["Alternating", "Random", "Spiral", "Symmetrical"],
        correctAnswer: "Alternating",
      },
      {
        id: 5,
        question: `If you rearrange the letters "CIFAIPC", you get the name of a:`,
        answers: ["Pacific", "Office", "Traffic", "Fiction"],
        correctAnswer: "Pacific",
      },
      {
        id: 6,
        question: "What is the next number: 2, 4, 8, 16, ?",
        answers: ["32", "24", "30", "18"],
        correctAnswer: "32",
      },
      {
        id: 7,
        question: "Which weighs more?",
        answers: [
          "1 liter of water",
          "1 liter of oil",
          "They are equal",
          "Depends on temperature",
        ],
        correctAnswer: "1 liter of water",
      },
      {
        id: 8,
        question: "Which diagram is shown in the image?",
        image: "/quiz/logicFacts/moderate-q8.png",
        answers: ["Venn diagram", "Flowchart", "Bar chart", "Tree diagram"],
        correctAnswer: "Venn diagram",
      },
      {
        id: 9,
        question: "Which statement must be true?",
        answers: [
          "All squares are rectangles",
          "All rectangles are squares",
          "All triangles are rectangles",
          "All circles are polygons",
        ],
        correctAnswer: "All squares are rectangles",
      },
      {
        id: 10,
        question:
          "If it takes 2 machines 2 minutes to make 2 widgets, how long for 4 machines to make 4 widgets?",
        answers: ["2 minutes", "4 minutes", "8 minutes", "1 minute"],
        correctAnswer: "2 minutes",
      },
    ],

    pro: [
      {
        id: 1,
        question: "What is the next number: 1, 4, 9, 16, ?",
        answers: ["25", "20", "24", "18"],
        correctAnswer: "25",
      },
      {
        id: 2,
        question:
          "A bat and a ball cost $1.10 total. The bat costs $1 more than the ball. How much does the ball cost?",
        answers: ["$0.05", "$0.10", "$0.15", "$0.01"],
        correctAnswer: "$0.05",
      },
      {
        id: 3,
        question: "Which logic grid is shown in the image?",
        image: "/quiz/logicFacts/pro-q3.png",
        answers: ["Logic grid", "Sudoku", "Crossword", "Matrix"],
        correctAnswer: "Logic grid",
      },
      {
        id: 4,
        question:
          "If you flip a fair coin three times, what is the probability of getting exactly two heads?",
        answers: ["3/8", "1/2", "1/4", "1/8"],
        correctAnswer: "3/8",
      },
      {
        id: 5,
        question: "Which conclusion follows: All A are B. Some B are C.",
        answers: [
          "Some A may be C",
          "All A are C",
          "No A are C",
          "Some C are not B",
        ],
        correctAnswer: "Some A may be C",
      },
      {
        id: 6,
        question: "What comes next: 2, 6, 12, 20, ?",
        answers: ["30", "24", "28", "32"],
        correctAnswer: "30",
      },
      {
        id: 7,
        question: "Which pattern is shown in the image?",
        image: "/quiz/logicFacts/pro-q7.png",
        answers: ["Triangular numbers", "Fibonacci", "Prime numbers", "Random"],
        correctAnswer: "Triangular numbers",
      },
      {
        id: 8,
        question:
          "If you know that today is Monday, what day will it be 100 days from now?",
        answers: ["Wednesday", "Thursday", "Friday", "Monday"],
        correctAnswer: "Wednesday",
      },
      {
        id: 9,
        question: "Which statement is always true?",
        answers: [
          "The sum of two even numbers is even",
          "The sum of two odd numbers is odd",
          "All primes are odd",
          "All even numbers are prime",
        ],
        correctAnswer: "The sum of two even numbers is even",
      },
      {
        id: 10,
        question:
          "Which reasoning method starts with a general rule and applies it to a specific case?",
        answers: [
          "Deductive reasoning",
          "Inductive reasoning",
          "Abductive reasoning",
          "Analogical reasoning",
        ],
        correctAnswer: "Deductive reasoning",
      },
    ],
  },
};
