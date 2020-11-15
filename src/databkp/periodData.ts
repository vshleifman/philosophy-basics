import presoc from "img/periods/pre-socratics.jpg";
import soc from "img/periods/greek-philosophers.jpg";
import med from "img/periods/Faith-and-Reason.jpg";
import ren from "img/periods/ren.jpeg";
import reason from "img/periods/reason.jpg";
import light from "img/periods/light.jpg";
import hel from "img/philos/zeno.jpg";
import rom from "img/periods/RomanHallofPhilosophers2.jpg";

import { Period, PeriodDataType } from "types/types";

const periodData =
  // :
  // {
  //   ancientCards: PeriodDataType[];
  //   medievalCards: PeriodDataType[];
  //   modernCards: PeriodDataType[];
  // }
  {
    ancientCards: [
      {
        img: presoc,
        title: "Pre-Socratic",
        desc: "Greek philosophers active before Socrates",
        text: [
          "The Pre-Socratic period of the Ancient era of philosophy refers to Greek philosophers active before Socrates, or contemporaries of Socrates who expounded on earlier knowledge.",
          "Generally speaking, all that remains of their works are a few textual fragments and the quotations of later philosophers and historians.",
          "The Pre-Socratic philosophers rejected traditional mythological explanations for the phenomena they saw around them in favor of more rational explanations. They started to ask questions like where did everything come from, and why is there such variety, and how can nature be described mathematically? They tended to look for universal principles to explain the whole of Nature. Although they are arguably more important for the questions they asked than the answers they arrived at, the problems and paradoxes they identified became the basis for later mathematical, scientific and philosophic study.",
          "Important movements of the period include the Milesian School, the Eleatic School, the Ephesian School, Pluralism, Pythagoreanism, Sophism and Atomism.",
        ],
        period: Period.PRESOCRATIC,
        dates: "7th - 5th Century B.C.",
      },
      {
        img: soc,
        title: "Socratic",
        desc: "Greek contemporaries and near contemporaries of Socrates",
        text: [],
        period: Period.SOCRATIC,
        dates: "5th - 4th Century B.C.",
      },
      {
        img: hel,
        title: "Hellenistic",
        desc:
          "Post-Aristotelian schools of thought developed in the Hellenistic world",
        text: [],
        period: Period.HELLENISTIC,
        dates: "3rd Century B.C. - 3th Century A.D.",
      },
      {
        img: rom,
        title: "Roman",
        desc: "Roman period continues the classical Greek tradition",
        text: [],
        period: Period.ROMAN,
        dates: "1st Century B.C. - 5th Century A.D.",
      },
    ],

    medievalCards: [
      {
        img: med,
        title: "Medieval",
        desc:
          "Western philosophical thought after the intellectual drought of the Dark Ages",
        text: [],
        period: Period.MEDIEVAL,
        dates: "6th - 14th Century",
      },
      {
        img: ren,
        title: "Renaissance",
        desc:
          "Bridge between Medieval philosophy and the start of Modern philosophy",
        text: [],
        period: Period.RENAIISANCE,
        dates: "15th - 16th Century",
      },
    ],

    modernCards: [
      {
        img: reason,
        title: "Age of Reason",
        desc: "The start of modern philosophy",
        text: [],
        period: Period.REASON,
        dates: "17th Century",
      },
      {
        img: light,
        title: "Age of Enlightenment",
        desc:
          "A continuation of, but also a reaction against the process of rationalization",
        text: [],
        period: Period.ENLIGHTENMENT,
        dates: "18th Century",
      },
      {
        img: soc,
        title: "Modern",
        desc: "",
        text: [],
        period: Period.MODERN,
        dates: "19th - 20th Century",
      },
    ],
  };

export default periodData;
