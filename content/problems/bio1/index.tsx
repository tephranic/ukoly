import { WindowDressing } from "solutions/bio1/WindowDressing";
import { ProblemInfo } from "../base";

import {
  ASpaceOddity,
  IntegerStrings,
  ParsingLists,
  WordGame,
  Unlock,
  ZeckendorfRepresentation,
  Pentominoes,
  DreamingSpires,
  DecoderRing,
  DebtRepayment,
  SerialNumbers,
  DotsAndBoxes,
  ColouredTriangles,
  MysteryParcel,
  BlockChains,
  Migration,
  PrimeConnections,
  BlockPalindromes,
  PromenadeFractions,
  DownPat,
  PalindromicNumbers,
  TriIsoGame,
  Parking,
  Loops,
  Battleships,
  DigitWords,
  Decrypt
} from "solutions";

export const bio1Problems: ProblemInfo[] = [
  {
    difficulty: "Easy",
    display: "Integer Strings",
    original: "https://www.olympiad.org.uk/papers/2024/bio/bio24-exam.pdf",
    year: 2024,
    tags: ["Q1", "Math"],
    editorialAuthors: ["Alex Pylypenko"],
    solutionAuthors: ["Alex Pylypenko"],
    component: <IntegerStrings />,
  },
  {
    difficulty: "Medium",
    display: "Parsing Lists",
    original: "https://www.olympiad.org.uk/papers/2024/bio/bio24-exam.pdf",
    year: 2024,
    tags: ["Q2", "Implementation"],
    editorialAuthors: ["Alex Pylypenko"],
    solutionAuthors: ["Alex Pylypenko"],
    component: <ParsingLists />,
  },
  {
    difficulty: "Easy",
    display: "Word Game",
    original: "https://www.olympiad.org.uk/papers/2024/bio/bio24-exam.pdf",
    year: 2024,
    tags: ["Q3", "Dynamic Programming"],
    editorialAuthors: ["Alex Pylypenko"],
    solutionAuthors: ["Alex Pylypenko"],
    component: <WordGame />,
  },
  {
    difficulty: "Hard",
    display: "Unlock",
    original: "https://www.olympiad.org.uk/papers/2013/bio/bio13-exam.pdf",
    year: 2013,
    tags: ["Q3", "Brute Force"],
    editorialAuthors: ["Alex Pylypenko"],
    solutionAuthors: ["Alex Pylypenko"],
    component: <Unlock />,
  },
  {
    difficulty: "Easy",
    display: "Zeckendorf",
    original: "https://www.olympiad.org.uk/papers/2023/bio/bio23-exam.pdf",
    year: 2023,
    tags: ["Q1", "Math"],
    editorialAuthors: ["Vladimir Filip"],
    solutionAuthors: ["Vladimir Filip"],
    component: <ZeckendorfRepresentation />,
  },
  {
    difficulty: "Medium",
    display: "Pentominoes",
    original: "https://www.olympiad.org.uk/papers/2023/bio/bio23-exam.pdf",
    year: 2023,
    tags: ["Q2", "Brute Force", "Implementation"],
    editorialAuthors: ["Vladimir Filip"],
    solutionAuthors: ["Vladimir Filip"],
    component: <Pentominoes />,
  },
  {
    difficulty: "Medium",
    display: "Dreaming Spires",
    original: "https://www.olympiad.org.uk/papers/2023/bio/bio23-exam.pdf",
    year: 2023,
    tags: ["Q3", "DFS and Similar"],
    editorialAuthors: ["Vladimir Filip"],
    solutionAuthors: ["Vladimir Filip", "Alex Pylypenko"],
    component: <DreamingSpires />,
  },
  {
    difficulty: "Easy",
    display: "Debt Repayment",
    original: "https://www.olympiad.org.uk/papers/2018/bio/bio18-exam.pdf",
    year: 2018,
    tags: ["Q1", "Implementation"],
    editorialAuthors: ["Adwaya Gupta"],
    solutionAuthors: ["Adwaya Gupta"],
    component: <DebtRepayment />,
  },
  {
    difficulty: "Easy",
    display: "Decoder Ring",
    original: "https://www.olympiad.org.uk/papers/2018/bio/bio18-exam.pdf",
    year: 2018,
    tags: ["Q2", "Implementation"],
    editorialAuthors: ["Adwaya Gupta"],
    solutionAuthors: ["Adwaya Gupta"],
    component: <DecoderRing />,
  },
  {
    difficulty: "Easy",
    display: "Serial Numbers",
    original: "https://www.olympiad.org.uk/papers/2018/bio/bio18-exam.pdf",
    year: 2018,
    tags: ["Q3", "DFS and Similar"],
    editorialAuthors: ["Adwaya Gupta"],
    solutionAuthors: ["Adwaya Gupta"],
    component: <SerialNumbers />,
  },
  {
    difficulty: "Medium",
    display: "Block-chain",
    original: "https://www.olympiad.org.uk/papers/2019/bio/bio19-exam.pdf",
    year: 2019,
    tags: ["Q3", "DFS and Similar"],
    editorialAuthors: ["Julia Volovich"],
    solutionAuthors: ["Julia Volovich"],
    component: <BlockChains />,
  },
  {
    difficulty: "Easy",
    display: "Coloured Triangles",
    original: "https://www.olympiad.org.uk/papers/2017/bio/bio17-exam.pdf",
    year: 2017,
    tags: ["Q1", "Implementation"],
    editorialAuthors: ["Adwaya Gupta"],
    solutionAuthors: ["Adwaya Gupta"],
    component: <ColouredTriangles />,
  },
  {
    difficulty: "Medium",
    display: "Dots and Boxes",
    original: "https://www.olympiad.org.uk/papers/2017/bio/bio17-exam.pdf",
    year: 2017,
    tags: ["Q2", "Implementation"],
    editorialAuthors: ["Adwaya Gupta"],
    solutionAuthors: ["Adwaya Gupta"],
    component: <DotsAndBoxes />,
  },
  {
    difficulty: "Medium",
    display: "Mystery Parcel",
    original: "https://www.olympiad.org.uk/papers/2017/bio/bio17-exam.pdf",
    year: 2017,
    tags: ["Q3", "Dynamic Programming"],
    editorialAuthors: ["Adwaya Gupta"],
    solutionAuthors: ["Adwaya Gupta"],
    component: <MysteryParcel />,
  },
  {
    difficulty: "Easy",
    display: "Migration",
    original: "https://www.olympiad.org.uk/papers/2016/bio/bio16-exam.pdf",
    year: 2016,
    tags: ["Q2", "Implementation"],
    editorialAuthors: ["Adwaya Gupta"],
    solutionAuthors: ["Adwaya Gupta"],
    component: <Migration />,
  },
  {
    difficulty: "Easy",
    display: "Prime Connections",
    original: "https://www.olympiad.org.uk/papers/2016/bio/bio16-exam.pdf",
    year: 2016,
    tags: ["Q3", "DFS and Similar"],
    editorialAuthors: ["Adwaya Gupta"],
    solutionAuthors: ["Adwaya Gupta"],
    component: <PrimeConnections />,
  },
  {
    difficulty: "Hard",
    display: "A Space Oddity",
    original: "https://olympiad.org.uk/papers/2001/bio/bio01ex.pdf",
    year: 2001,
    tags: ["Q3", "Graphs", "DFS and Similar"],
    editorialAuthors: ["Alex Pylypenko"],
    solutionAuthors: ["Alex Pylypenko"],
    component: <ASpaceOddity />,
  },
  {
    difficulty: "Medium",
    display: "Block Palindromes",
    original: "https://www.olympiad.org.uk/papers/2015/bio/bio15-exam.pdf",
    year: 2015,
    tags: ["Q1", "Brute Force", "Implementation"],
    editorialAuthors: ["Alex Pylypenko"],
    solutionAuthors: ["Alex Pylypenko"],
    component: <BlockPalindromes />,
  },
  {
    difficulty: "Medium",
    display: "Parking",
    original: "https://www.olympiad.org.uk/papers/2022/bio/bio22-exam.pdf",
    year: 2022,
    tags: ["Q3", "Math"],
    editorialAuthors: ["Duy Nguyen"],
    solutionAuthors: ["Duy Nguyen"],
    component: <Parking />,
  },
  {
    difficulty: "Easy",

    display: "Palindromic Numbers",
    original: "https://www.olympiad.org.uk/papers/2019/bio/bio19-exam.pdf",
    year: 2019,
    tags: ["Q1", "Math"],
    editorialAuthors: ["Yuvan Raja"],
    solutionAuthors: ["Yuvan Raja"],
    component: <PalindromicNumbers />,
  },
  {
    difficulty: "Easy",
    display: "Promenade Fractions",
    original: "https://www.olympiad.org.uk/papers/2016/bio/bio16-exam.pdf",
    year: 2016,
    tags: ["Q1", "Implementation"],
    editorialAuthors: ["Adwaya Gupta"],
    solutionAuthors: ["Adwaya Gupta"],
    component: <PromenadeFractions />,
  },
  {  
    difficulty: "Medium",
    display: "Window Dressing",
    original: "https://www.olympiad.org.uk/papers/2021/bio/bio21-exam.pdf",
    year: 2021,
    tags: ["Q3", "DFS and Similar"],
    editorialAuthors: ["Alex Pylypenko"],
    solutionAuthors: ["Alex Pylypenko"],
    component: <WindowDressing />,
  },
  {
    difficulty: "Medium",
    display: "Down Pat",
    original: "https://www.olympiad.org.uk/papers/2021/bio/bio21-exam.pdf",
    year: 2021,
    tags: ["Q1", "Brute Force", "Implementation"],
    editorialAuthors: ["Alex Pylypenko"],
    solutionAuthors: ["Alex Pylypenko"],
    component: <DownPat />,
  },
  {
    difficulty: "Insane",
    display: "Tri-Iso Game",
    original: "https://www.olympiad.org.uk/papers/2021/bio/bio21-exam.pdf",
    year: 2021,
    tags: ["Q2", "Implementation"],
    editorialAuthors: ["Adwaya Gupta"],
    solutionAuthors: ["Adwaya Gupta"],
    component: <TriIsoGame />,
  },
  {
    difficulty: "Medium",
    display: "Loops",
    original: "https://www.olympiad.org.uk/papers/2014/bio/bio14-exam.pdf",
    year: 2014,
    tags: ["Q2", "Implementation"],
    editorialAuthors: ["Adwaya Gupta"],
    solutionAuthors: ["Adwaya Gupta"],
    component: <Loops />,
  },
  {
    difficulty: "Easy",
    display: "Digit Words",
    original: "https://www.olympiad.org.uk/papers/2009/bio/bio09-exam.pdf",
    year: 2009,
    tags: ["Q1", "Brute Force"],
    editorialAuthors: ["Alex Pylypenko"],
    solutionAuthors: ["Alex Pylypenko"],
    component: <DigitWords />,
  },
  {
    difficulty: "Easy",
    display: "Battleships",
    original: "https://www.olympiad.org.uk/papers/2015/bio/bio15-exam.pdf",
    year: 2015,
    tags: ["Q2", "Implementation"],
    editorialAuthors: ["Adwaya Gupta"],
    solutionAuthors: ["Adwaya Gupta"],
    component: <Battleships />,
  },
  {
    difficulty: "Easy",
    display: "Decrypt",
    original: "https://www.olympiad.org.uk/papers/2022/bio/bio22-exam.pdf",
    year: 2022,
    tags: ["Q1", "Math"],
    editorialAuthors: ["Yuvan Raja"],
    solutionAuthors: ["Yuvan Raja"],
    component: <Decrypt />,
  },
];
