import { harryPotterQuestions } from "./harryPotter";
import { marvelQuestions } from "./marvel";
import { generalQuestions } from "./general";
import { geographyQuestions } from "./geography";
import { historyQuestions } from "./history";
import { technologyQuestions } from "./technology";
import { logicFactsQuestions } from "./logicFacts";
import { scienceQuestions } from "./science";
import { moviesTvQuestions } from "./moviesTV";
import { languageQuestions } from "./language";

export const CATEGORIES: QuestionsPack[] = [
  generalQuestions,
  geographyQuestions,
  historyQuestions,
  moviesTvQuestions,
  harryPotterQuestions,
  marvelQuestions,
  scienceQuestions,
  technologyQuestions,
  languageQuestions,
  logicFactsQuestions,
];
