export const marvelQuestions: QuestionsPack = {
  slug: "marvel",
  title: "Marvel",
  description:
    "From heroes to villains, comics to movies, prove how well you know the Marvel Universe.",
  difficulties: {
    casual: [
      {
        id: 1,
        question: "Who is the first Avenger to appear on screen in the MCU?",
        answers: ["Iron Man", "Captain America", "Thor", "Hulk"],
        correctAnswer: "Iron Man",
      },
      {
        id: 2,
        question: "What is the name of Thor's hammer?",
        answers: ["Mjolnir", "Stormbreaker", "Gungnir", "Aegis"],
        correctAnswer: "Mjolnir",
      },
      {
        id: 3,
        question: "Which Infinity Stone is located in the Tesseract?",
        answers: ["Mind Stone", "Space Stone", "Power Stone", "Time Stone"],
        correctAnswer: "Space Stone",
      },
      {
        id: 4,
        question: "Who is Tony Stark's AI assistant in most of the MCU?",
        answers: ["JARVIS", "FRIDAY", "ULTRON", "EDITH"],
        correctAnswer: "JARVIS",
      },
      {
        id: 5,
        question: `Which character says, "I can do this all day"?`,
        answers: ["Captain America", "Iron Man", "Falcon", "Winter Soldier"],
        correctAnswer: "Captain America",
      },
      {
        id: 6,
        question: "Which city is primarily protected by Spider-Man in the MCU?",
        answers: ["New York City", "Chicago", "San Francisco", "Boston"],
        correctAnswer: "New York City",
      },
      {
        id: 7,
        question: "Who is shown in the image?",
        image: "mcu_character_iron_man.jpg", // Iron Man suit / Tony Stark
        answers: ["Iron Man", "War Machine", "Ultron", "Vision"],
        correctAnswer: "Iron Man",
      },
      {
        id: 8,
        question: "Which movie features the Avengers fighting in an airport?",
        answers: [
          "Avengers: Age of Ultron",
          "Captain America: Civil War",
          "Avengers: Infinity War",
          "Avengers: Endgame",
        ],
        correctAnswer: "Captain America: Civil War",
      },
      {
        id: 9,
        question:
          "Which Wakandan metal is used to make Captain America's shield?",
        answers: ["Vibranium", "Adamantium", "Uru", "Carbonadium"],
        correctAnswer: "Vibranium",
      },
      {
        id: 10,
        question:
          "In what year was the movie Avengers: Age of Ultron released?",
        image: "mcu_title_age_of_ultron.jpg", // official title card / poster
        answers: ["2012", "2015", "2019", "2016"],
        correctAnswer: "2015",
      },
    ],

    moderate: [
      {
        id: 1,
        question:
          "Which TV series introduces the character Kang the Conqueror?",
        answers: [
          "Loki",
          "WandaVision",
          "The Falcon and the Winter Soldier",
          "Moon Knight",
        ],
        correctAnswer: "Loki",
      },
      {
        id: 2,
        question:
          "What is the name of the organization infiltrated by Hydra within the MCU?",
        answers: [
          "S.H.I.E.L.D.",
          "S.W.O.R.D.",
          "The Avengers",
          "The Illuminati",
        ],
        correctAnswer: "S.H.I.E.L.D.",
      },
      {
        id: 3,
        question:
          "Who is the first Avenger to successfully kill Thanos in the MCU?",
        answers: ["Thor", "Iron Man", "Captain America", "Hulk"],
        correctAnswer: "Thor",
      },
      {
        id: 4,
        question: "Which character becomes the new Captain America in the MCU?",
        answers: ["Bucky Barnes", "Sam Wilson", "John Walker", "Nick Fury"],
        correctAnswer: "Sam Wilson",
      },
      {
        id: 5,
        question:
          "Which Marvel TV series focuses on multiple versions of the same character?",
        answers: ["Loki", "Daredevil", "Jessica Jones", "Hawkeye"],
        correctAnswer: "Loki",
      },
      {
        id: 6,
        question: "What is the name of Wanda Maximoff's magical alter ego?",
        answers: [
          "Scarlet Witch",
          "Crimson Queen",
          "Hex Maiden",
          "Chaos Witch",
        ],
        correctAnswer: "Scarlet Witch",
      },
      {
        id: 7,
        question: "Which character is shown in the image?",
        image: "mcu_character_wanda.jpg", // Wanda using magic
        answers: ["Scarlet Witch", "Captain Marvel", "Black Widow", "Shuri"],
        correctAnswer: "Scarlet Witch",
      },
      {
        id: 8,
        question: "Which realm is ruled by Hela in Thor: Ragnarok?",
        answers: ["Asgard", "Midgard", "Hel", "Jotunheim"],
        correctAnswer: "Asgard",
      },
      {
        id: 9,
        question:
          "Which TV series introduces the character of Kingpin into the MCU?",
        answers: ["Daredevil", "Hawkeye", "Luke Cage", "Echo"],
        correctAnswer: "Daredevil",
      },
      {
        id: 10,
        question: "Which location is shown in the image?",
        image: "mcu_location_wakanda.jpg", // Wakanda city / landscape
        answers: ["Wakanda", "Talokan", "Asgard", "Sokovia"],
        correctAnswer: "Wakanda",
      },
    ],

    pro: [
      {
        id: 1,
        question:
          "In the MCU, which Infinity Stone does Thanos already possess at the beginning of Avengers: Infinity War?",
        answers: ["Power Stone", "Space Stone", "Reality Stone", "Mind Stone"],
        correctAnswer: "Power Stone",
      },
      {
        id: 2,
        question:
          "In Marvel comics, which secret group consists of some of Earth's most powerful heroes making decisions behind the scenes?",
        answers: [
          "The Illuminati",
          "The Thunderbolts",
          "The Defenders",
          "The Watchers",
        ],
        correctAnswer: "The Illuminati",
      },
      {
        id: 3,
        question:
          "In the MCU, which organization replaces S.H.I.E.L.D. as Nick Fury's primary affiliation?",
        answers: [
          "S.W.O.R.D.",
          "The Avengers",
          "The World Council",
          "The Watchers",
        ],
        correctAnswer: "S.W.O.R.D.",
      },
      {
        id: 4,
        question:
          "In Marvel comics, which team is primarily made up of villains pretending to be heroes?",
        answers: [
          "The Thunderbolts",
          "The Sinister Six",
          "The Dark Avengers",
          "The Defenders",
        ],
        correctAnswer: "The Thunderbolts",
      },
      {
        id: 5,
        question:
          "In Loki, which role does He Who Remains claim to have fulfilled before his death?",
        answers: [
          "Preventing multiversal war",
          "Ruling the TVA",
          "Creating the Infinity Stones",
          "Destroying timelines",
        ],
        correctAnswer: "Preventing multiversal war",
      },
      {
        id: 6,
        question:
          "In Marvel comics, what is the name of the process that gives mutants their powers?",
        answers: [
          "X-Gene activation",
          "Mutation surge",
          "Gene awakening",
          "Evolution event",
        ],
        correctAnswer: "X-Gene activation",
      },
      {
        id: 7,
        question: "Which location is shown in the image?",
        image: "mcu_location_citadel_at_the_end_of_time.jpg", // Loki finale location
        answers: [
          "The Citadel at the End of Time",
          "The TVA Headquarters",
          "Chronopolis",
          "The Quantum Realm",
        ],
        correctAnswer: "The Citadel at the End of Time",
      },
      {
        id: 8,
        question:
          "In Marvel comics, which superhero is killed shortly after the Civil War storyline?",
        answers: ["Captain America", "Iron Man", "Black Goliath", "Goliath"],
        correctAnswer: "Captain America",
      },
      {
        id: 9,
        question:
          "Which Infinity Stone is missing from the object shown in the image?",
        image: "mcu_object_infinity_gauntlet_missing_stone.jpg", // Gauntlet with one slot empty
        answers: ["Mind Stone", "Time Stone", "Reality Stone", "Space Stone"],
        correctAnswer: "Mind Stone",
      },
      {
        id: 10,
        question:
          "In Marvel comics, which villain is revealed to be Thanos' grandfather?",
        answers: ["Kang the Conqueror", "Ego", "Dormammu", "Annihilus"],
        correctAnswer: "Kang the Conqueror",
      },
    ],
  },
};
