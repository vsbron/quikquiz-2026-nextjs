export const moviesTvQuestions: QuestionsPack = {
  slug: "movies-tv",
  title: "Movies & TV",
  description:
    "From classics to modern hits, test your knowledge of film, series, and iconic pop culture moments.",
  difficulties: {
    casual: [
      {
        id: 1,
        question: "Who directed the movie Titanic?",
        answers: [
          "James Cameron",
          "Steven Spielberg",
          "Christopher Nolan",
          "Ridley Scott",
        ],
        correctAnswer: "James Cameron",
      },
      {
        id: 2,
        question: "Which movie features the character Forrest Gump?",
        answers: ["Forrest Gump", "Cast Away", "Rain Man", "The Green Mile"],
        correctAnswer: "Forrest Gump",
      },
      {
        id: 3,
        question: "Which TV show is set in the fictional land of Westeros?",
        answers: [
          "Game of Thrones",
          "The Witcher",
          "Vikings",
          "The Lord of the Rings: The Rings of Power",
        ],
        correctAnswer: "Game of Thrones",
      },
      {
        id: 4,
        question: "Who played Jack Dawson in Titanic?",
        answers: [
          "Leonardo DiCaprio",
          "Brad Pitt",
          "Johnny Depp",
          "Matt Damon",
        ],
        correctAnswer: "Leonardo DiCaprio",
      },
      {
        id: 5,
        question: "Which movie is shown in the image?",
        image: "movie_jurassic_park.jpg", // T-Rex rain scene / logo
        answers: ["Jurassic Park", "King Kong", "Godzilla", "Jaws"],
        correctAnswer: "Jurassic Park",
      },
      {
        id: 6,
        question: "Which TV show features the character Sheldon Cooper?",
        answers: [
          "The Big Bang Theory",
          "Friends",
          "How I Met Your Mother",
          "Community",
        ],
        correctAnswer: "The Big Bang Theory",
      },
      {
        id: 7,
        question: "Which movie won Best Picture at the Oscars in 2020?",
        answers: ["Parasite", "1917", "Joker", "Once Upon a Time in Hollywood"],
        correctAnswer: "Parasite",
      },
      {
        id: 8,
        question: "Which genre best describes The Matrix?",
        answers: ["Science fiction", "Fantasy", "Horror", "Western"],
        correctAnswer: "Science fiction",
      },
      {
        id: 9,
        question: "Which actor is shown in the image?",
        image: "actor_tom_hanks.jpg",
        answers: ["Tom Hanks", "Robin Williams", "Bill Murray", "Steve Carell"],
        correctAnswer: "Tom Hanks",
      },
      {
        id: 10,
        question:
          "Which TV show is about a chemistry teacher turned drug lord?",
        answers: ["Breaking Bad", "Ozark", "Narcos", "The Wire"],
        correctAnswer: "Breaking Bad",
      },
    ],
    moderate: [
      {
        id: 1,
        question: `Which movie features the quote: "You talking to me?"`,
        answers: ["Taxi Driver", "Scarface", "Goodfellas", "The Godfather"],
        correctAnswer: "Taxi Driver",
      },
      {
        id: 2,
        question: "Who directed Inception?",
        answers: [
          "Christopher Nolan",
          "Denis Villeneuve",
          "David Fincher",
          "James Cameron",
        ],
        correctAnswer: "Christopher Nolan",
      },
      {
        id: 3,
        question: "Which TV series is set primarily in a paper company office?",
        answers: [
          "The Office",
          "Parks and Recreation",
          "Brooklyn Nine-Nine",
          "Scrubs",
        ],
        correctAnswer: "The Office",
      },
      {
        id: 4,
        question: "Which movie is shown in the image?",
        image: "movie_pulp_fiction.jpg", // Vincent & Jules / poster
        answers: ["Pulp Fiction", "Reservoir Dogs", "Goodfellas", "Heat"],
        correctAnswer: "Pulp Fiction",
      },
      {
        id: 5,
        question: "Which actor played the Joker in The Dark Knight?",
        answers: [
          "Heath Ledger",
          "Joaquin Phoenix",
          "Jack Nicholson",
          "Jared Leto",
        ],
        correctAnswer: "Heath Ledger",
      },
      {
        id: 6,
        question: "Which TV show is set in the 1960s advertising world?",
        answers: ["Mad Men", "Suits", "The Crown", "Boardwalk Empire"],
        correctAnswer: "Mad Men",
      },
      {
        id: 7,
        question: "Which movie franchise features Ethan Hunt?",
        answers: ["Mission: Impossible", "James Bond", "Bourne", "Jack Ryan"],
        correctAnswer: "Mission: Impossible",
      },
      {
        id: 8,
        question: "Who directed The Lord of the Rings trilogy?",
        answers: [
          "Peter Jackson",
          "George Lucas",
          "Ridley Scott",
          "Steven Spielberg",
        ],
        correctAnswer: "Peter Jackson",
      },
      {
        id: 9,
        question: "Which TV series is shown in the image?",
        image: "tv_series_stranger_things.jpg", // kids + bikes / logo
        answers: [
          "Stranger Things",
          "Dark",
          "The Umbrella Academy",
          "The X-Files",
        ],
        correctAnswer: "Stranger Things",
      },
      {
        id: 10,
        question:
          "Which movie is known for being told in reverse chronological order?",
        answers: ["Memento", "Inception", "Tenet", "Fight Club"],
        correctAnswer: "Memento",
      },
    ],
    pro: [
      {
        id: 1,
        question:
          "Which director is known for the films Seven, Fight Club, and Zodiac?",
        answers: [
          "David Fincher",
          "Martin Scorsese",
          "Paul Thomas Anderson",
          "Stanley Kubrick",
        ],
        correctAnswer: "David Fincher",
      },
      {
        id: 2,
        question:
          "Which movie won the first-ever Academy Award for Best Picture?",
        answers: [
          "Wings",
          "Gone with the Wind",
          "All Quiet on the Western Front",
          "Sunrise",
        ],
        correctAnswer: "Wings",
      },
      {
        id: 3,
        question: `Which TV series popularized the phrase "Winter is Coming"?`,
        answers: ["Game of Thrones", "The Witcher", "Vikings", "Rome"],
        correctAnswer: "Game of Thrones",
      },
      {
        id: 4,
        question: "Which film is shown in the image?",
        image: "movie_blade_runner.jpg", // neon city / Deckard
        answers: [
          "Blade Runner",
          "Akira",
          "The Fifth Element",
          "Minority Report",
        ],
        correctAnswer: "Blade Runner",
      },
      {
        id: 5,
        question: "Which actor has won the most Academy Awards for acting?",
        answers: [
          "Katharine Hepburn",
          "Meryl Streep",
          "Jack Nicholson",
          "Daniel Day-Lewis",
        ],
        correctAnswer: "Katharine Hepburn",
      },
      {
        id: 6,
        question:
          "Which TV show is set almost entirely inside a single apartment building?",
        answers: [
          "Only Murders in the Building",
          "Friends",
          "Seinfeld",
          "How I Met Your Mother",
        ],
        correctAnswer: "Only Murders in the Building",
      },
      {
        id: 7,
        question: `Which movie is famous for the line "Rosebud"?`,
        answers: ["Citizen Kane", "Casablanca", "Vertigo", "Rear Window"],
        correctAnswer: "Citizen Kane",
      },
      {
        id: 8,
        question: "Which director is shown in the image?",
        image: "director_stanley_kubrick.jpg",
        answers: [
          "Stanley Kubrick",
          "Alfred Hitchcock",
          "Francis Ford Coppola",
          "Orson Welles",
        ],
        correctAnswer: "Stanley Kubrick",
      },
      {
        id: 9,
        question:
          "Which TV series is structured as an anthology with each season telling a new story?",
        answers: ["True Detective", "Breaking Bad", "The Sopranos", "Lost"],
        correctAnswer: "True Detective",
      },
      {
        id: 10,
        question: `Which film introduced the concept of the "MacGuffin" popularized by Alfred Hitchcock?`,
        answers: ["The 39 Steps", "Psycho", "Vertigo", "North by Northwest"],
        correctAnswer: "The 39 Steps",
      },
    ],
  },
};
