import { LINKS } from "@/utils/constants";
import {
  HomeIcon,
  InformationCircleIcon,
  QuestionMarkCircleIcon,
  Squares2X2Icon,
  SparklesIcon,
} from "@heroicons/react/24/solid";

export const nav = [
  {
    url: LINKS.HOME,
    label: "Home",
    icon: HomeIcon,
  },
  {
    url: LINKS.HOW_TO_PLAY,
    label: "How To Play",
    icon: QuestionMarkCircleIcon,
  },
  {
    url: LINKS.CATEGORIES,
    label: "Categories",
    icon: Squares2X2Icon,
  },
  {
    url: LINKS.RANDOM_QUIZ,
    label: "Random Quiz",
    icon: SparklesIcon,
  },
  {
    url: LINKS.APP_INFO,
    label: "App Info",
    icon: InformationCircleIcon,
  },
];
