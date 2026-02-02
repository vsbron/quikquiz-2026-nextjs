export const languageQuestions: QuestionsPack = {
  slug: "language-words",
  title: "Language & Words",
  difficulties: {
    casual: [
      {
        question: `Which word is a synonym for "quick"?`,
        answers: ["Rapid", "Lazy", "Heavy", "Silent"],
        correctAnswer: "Rapid",
      },
      {
        question: "Which word is spelled correctly?",
        answers: ["Definitely", "Definately", "Definitly", "Definatelly"],
        correctAnswer: "Definitely",
      },
      {
        question: `What does the idiom "break the ice" usually mean?`,
        answers: [
          "Start a conversation in an awkward situation",
          "End a friendship",
          "Cause an argument",
          "Leave a party early",
        ],
        correctAnswer: "Start a conversation in an awkward situation",
      },
      {
        question: `Which word means the opposite of "ancient"?`,
        answers: ["Modern", "Empty", "Distant", "Rare"],
        correctAnswer: "Modern",
      },
      {
        question: "Which punctuation mark is shown in the image?",
        image: "punctuation_semicolon.jpg", // ;
        answers: ["Semicolon", "Colon", "Comma", "Apostrophe"],
        correctAnswer: "Semicolon",
      },
      {
        question: `What does "bilingual" mean?`,
        answers: [
          "Able to speak two languages",
          "Able to read very fast",
          "Using big words",
          "Speaking formally all the time",
        ],
        correctAnswer: "Able to speak two languages",
      },
      {
        question: `Which word best completes the phrase: "a piece of ___"?`,
        answers: ["cake", "steel", "storm", "glass"],
        correctAnswer: "cake",
      },
      {
        question: "Which pair are homophones (sound the same) in English?",
        answers: ["Their / There", "Cat / Cut", "Book / Back", "Day / Die"],
        correctAnswer: "Their / There",
      },
      {
        question: "Which word is shown in the image?",
        image: "word_typo_misspell_receive.jpg", // image showing "receive"
        answers: ["Receive", "Recieve", "Receeve", "Reseive"],
        correctAnswer: "Receive",
      },
      {
        question: `What does the word "literal" mean?`,
        answers: [
          "Exact, not exaggerated",
          "Very funny",
          "Secretly rude",
          "Extremely long",
        ],
        correctAnswer: "Exact, not exaggerated",
      },
    ],

    moderate: [
      {
        question: `Which word means "a fear of confined spaces"?`,
        answers: [
          "Claustrophobia",
          "Acrophobia",
          "Arachnophobia",
          "Agoraphobia",
        ],
        correctAnswer: "Claustrophobia",
      },
      {
        question: `Which sentence uses "affect" correctly?`,
        answers: [
          "The weather can affect my mood.",
          "My mood will affective the day.",
          "I have a strong affect on music.",
          "That affect was very loud.",
        ],
        correctAnswer: "The weather can affect my mood.",
      },
      {
        question: `What does the prefix "bio-" most commonly relate to?`,
        answers: ["Life", "Sound", "Heat", "Light"],
        correctAnswer: "Life",
      },
      {
        question: `Which word is the best match for "brief"?`,
        answers: ["Concise", "Ancient", "Fragile", "Polite"],
        correctAnswer: "Concise",
      },
      {
        question: "Which writing style is shown in the image?",
        image: "writing_style_cursive.jpg", // cursive handwriting sample
        answers: ["Cursive", "Gothic", "Italic", "Calligraphy"],
        correctAnswer: "Cursive",
      },
      {
        question: "Which is an example of a palindrome?",
        answers: ["Racecar", "Triangle", "Computer", "Elephant"],
        correctAnswer: "Racecar",
      },
      {
        question: `What does "etymology" study?`,
        answers: [
          "Origins of words",
          "Human emotions",
          "Animal behavior",
          "Weather patterns",
        ],
        correctAnswer: "Origins of words",
      },
      {
        question: `Which word is closest in meaning to "obsolete"?`,
        answers: ["Outdated", "Popular", "Dangerous", "Accurate"],
        correctAnswer: "Outdated",
      },
      {
        question: "Which word in the image is the adverb?",
        image: "parts_of_speech_quickly.jpg", // sentence highlighting "quickly"
        answers: ["Quickly", "Quick", "Runner", "Run"],
        correctAnswer: "Quickly",
      },
      {
        question: `Which phrase is an idiom meaning "very easy"?`,
        answers: [
          "Piece of cake",
          "Bite the bullet",
          "Cut corners",
          "Hit the sack",
        ],
        correctAnswer: "Piece of cake",
      },
    ],

    pro: [
      {
        question: `Which word means "to openly show contempt"?`,
        answers: ["Deride", "Admire", "Conserve", "Confirm"],
        correctAnswer: "Deride",
      },
      {
        question: `Which term describes a word that sounds like what it means (e.g., "buzz")?`,
        answers: ["Onomatopoeia", "Oxymoron", "Metonymy", "Hyperbole"],
        correctAnswer: "Onomatopoeia",
      },
      {
        question: `Which sentence uses "fewer" correctly?`,
        answers: [
          "There are fewer cars on the road today.",
          "There is fewer water in the glass.",
          "I have fewer patience now.",
          "This soup has fewer salt.",
        ],
        correctAnswer: "There are fewer cars on the road today.",
      },
      {
        question: `Which word is formed by blending two words (like "brunch")?`,
        answers: ["Portmanteau", "Epithet", "Anagram", "Homonym"],
        correctAnswer: "Portmanteau",
      },
      {
        question: "Which symbol is shown in the image?",
        image: "punctuation_em_dash.jpg", // —
        answers: ["Em dash", "Hyphen", "En dash", "Minus sign"],
        correctAnswer: "Em dash",
      },
      {
        question: `Which pair are "false friends" (look similar but differ in meaning) across languages?`,
        answers: [
          `English "actual" vs Spanish "actual" (meaning "current")`,
          `English "water" vs German "Wasser" (same meaning)`,
          `English "music" vs French "musique" (same meaning)`,
          `English "telephone" vs Italian "telefono" (same meaning)`,
        ],
        correctAnswer: `English "actual" vs Spanish "actual" (meaning "current")`,
      },
      {
        question: `What is an "oxymoron"?`,
        answers: [
          "A phrase with contradictory terms",
          "A word that imitates a sound",
          "A hidden insult",
          "A story with a moral lesson",
        ],
        correctAnswer: "A phrase with contradictory terms",
      },
      {
        question: `Which word is an anagram of "LISTEN"?`,
        answers: ["SILENT", "TENSIL", "ENLIST", "INLETS"],
        correctAnswer: "SILENT",
      },
      {
        question: "Which sentence is written in the passive voice?",
        answers: [
          "The window was broken by the storm.",
          "The storm broke the window.",
          "The storm is breaking the window.",
          "The storm will break the window.",
        ],
        correctAnswer: "The window was broken by the storm.",
      },
      {
        question: `Which word means "the use of too many words"?`,
        answers: ["Verbosity", "Clarity", "Brevity", "Irony"],
        correctAnswer: "Verbosity",
      },
    ],
  },
};
