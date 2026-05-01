import { NextRequest, NextResponse } from "next/server";

type NoteRow = {
  semester: string;
  cycle: string;
  subject: string;
  keywords: string;
  notesLink: string;
};

const NOTES: NoteRow[] = [
  {
    semester: "1st",
    cycle: "Physics",
    subject: "New Physics",
    keywords: "physics, science, mechanics",
    notesLink:
      "https://drive.google.com/drive/folders/1e-LQMg0B7XF9wJDfWg4vWwc8SZg16LXt",
  },
  {
    semester: "1st",
    cycle: "Physics",
    subject: "Problem Solving",
    keywords: "problem solving, psp, logic",
    notesLink:
      "https://drive.google.com/drive/u/5/folders/1yKkXdRkNXuui8Ysq7hCygAPak9OS49O_",
  },
  {
    semester: "1st",
    cycle: "Physics",
    subject: "Maths",
    keywords: "math, maths, calculus, algebra",
    notesLink:
      "https://drive.google.com/drive/folders/1sYdBua6wr7uhMYw4uIKw5hrPtYd10c_B",
  },
  {
    semester: "1st",
    cycle: "Physics",
    subject: "Basic Electronics",
    keywords: "electronics, basic electronics, circuits",
    notesLink:
      "https://drive.google.com/drive/folders/17iJtHYPWgAjSgAG1-SPQKYIBfQsDTcYK",
  },
  {
    semester: "1st",
    cycle: "Physics",
    subject: "Cyber Security",
    keywords: "cyber security, security, hacking",
    notesLink:
      "https://drive.google.com/drive/folders/17kg_R1QPAVeMBKRJIIcAtGzJH7h1UIw2",
  },
  {
    semester: "1st",
    cycle: "Physics",
    subject: "Python",
    keywords: "python, programming, coding",
    notesLink:
      "https://drive.google.com/drive/folders/1z5Ai6kwTfIdODpzdKd6imVBjoNWZNqL5",
  },
  {
    semester: "1st",
    cycle: "Physics",
    subject: "English",
    keywords: "english, grammar, language",
    notesLink:
      "https://drive.google.com/drive/folders/17lhdfYPpJruKzbPyIbqv2wL9TBdvwgDq",
  },
  {
    semester: "1st",
    cycle: "Physics",
    subject: "Constitution of India",
    keywords: "constitution, india, law",
    notesLink:
      "https://drive.google.com/drive/folders/17na00jELfbtiLk7gdjzpFRbZ58AtEAyf",
  },
  {
    semester: "1st",
    cycle: "Physics",
    subject: "Civil",
    keywords: "civil, civil engineering, structures",
    notesLink:
      "https://drive.google.com/drive/folders/1bfCQooRwbnmkJC_W18mTRYzTgfWHJhEb",
  },
  {
    semester: "1st",
    cycle: "Physics",
    subject: "PSP",
    keywords: "psp, problem solving, logic",
    notesLink:
      "https://drive.google.com/drive/u/5/folders/1yKkXdRkNXuui8Ysq7hCygAPak9OS49O_",
  },
  {
    semester: "1st",
    cycle: "Chemistry",
    subject: "Chemistry",
    keywords: "chemistry, chemical, reactions",
    notesLink:
      "https://drive.google.com/drive/folders/11s9sgR-Hpb40p2tVlsetlBWcE6UPIubO",
  },
  {
    semester: "1st",
    cycle: "Chemistry",
    subject: "Maths",
    keywords: "math, maths, calculus, algebra",
    notesLink:
      "https://drive.google.com/drive/folders/1DL06euTxLjK1GWH2AFPaB1Yfd5mxf_8j",
  },
  {
    semester: "1st",
    cycle: "Chemistry",
    subject: "C Programming",
    keywords: "c programming, coding, programming",
    notesLink:
      "https://drive.google.com/drive/folders/134H9d31TReG8O_qgglnE9qqgctLtEv-z",
  },
  {
    semester: "1st",
    cycle: "Chemistry",
    subject: "PSP",
    keywords: "psp, problem solving, logic",
    notesLink:
      "https://drive.google.com/drive/folders/1yKkXdRkNXuui8Ysq7hCygAPak9OS49O_",
  },
  {
    semester: "1st",
    cycle: "Chemistry",
    subject: "BEE",
    keywords: "bee, basic electrical engineering",
    notesLink:
      "https://drive.google.com/drive/folders/19sv3ZFsqBuNxB3Ltuyu6YwYJLh_86q__",
  },
  {
    semester: "1st",
    cycle: "Chemistry",
    subject: "IT Skills",
    keywords: "it skills, computer skills",
    notesLink:
      "https://drive.google.com/drive/folders/11qYDOnYNVIRyVNSYOFan64n-RHn8ozIa",
  },
  {
    semester: "1st",
    cycle: "Chemistry",
    subject: "Cyber Security",
    keywords: "cyber security, security, hacking",
    notesLink:
      "https://drive.google.com/drive/folders/17kg_R1QPAVeMBKRJIIcAtGzJH7h1UIw2",
  },
  {
    semester: "1st",
    cycle: "Chemistry",
    subject: "ADLD",
    keywords: "adld, advanced digital logic design",
    notesLink:
      "https://drive.google.com/drive/folders/16T2_I_JIEisswgPj4Xk6S_OY_DTtCklG",
  },
  {
    semester: "1st",
    cycle: "Chemistry",
    subject: "Bio and EVS",
    keywords: "bio, evs, environment, biology",
    notesLink:
      "https://drive.google.com/drive/folders/13K6Hwh_bkWi1hBb9iYAJf6nQcS6In0AQ",
  },
  {
    semester: "1st",
    cycle: "Chemistry",
    subject: "EV",
    keywords: "ev, environmental studies",
    notesLink:
      "https://drive.google.com/drive/folders/1EBRbMBS6r42GQ60k8O4AdkiC_0muZ1TF",
  },
];

function normalizeQuery(query: string): string[] {
  return query
    .toLowerCase()
    .replace(/[^a-z0-9\s+]/g, " ")
    .split(/\s+/)
    .map((w) => w.trim())
    .filter(Boolean);
}

function scoreNote(note: NoteRow, queryWords: string[]): number {
  const searchText = `${note.subject} ${note.keywords} ${note.cycle} ${note.semester}`.toLowerCase();
  return queryWords.reduce((score, word) => (searchText.includes(word) ? score + 1 : score), 0);
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const query = typeof body?.query === "string" ? body.query.trim() : "";

  if (!query) {
    return NextResponse.json(
      { success: false, message: "Please enter a query." },
      { status: 400 }
    );
  }

  const queryWords = normalizeQuery(query);

  if (queryWords.length === 0) {
    return NextResponse.json(
      { success: false, message: "Please enter a valid query." },
      { status: 400 }
    );
  }

  let best: NoteRow | null = null;
  let bestScore = 0;

  for (const note of NOTES) {
    const score = scoreNote(note, queryWords);
    if (score > bestScore) {
      bestScore = score;
      best = note;
    }
  }

  if (!best || bestScore === 0) {
    return NextResponse.json({
      success: false,
      message: "No matching notes found.",
      score: 0,
      maxScore: queryWords.length,
      confidence: 0,
    });
  }

  const confidence = Math.min(1, bestScore / queryWords.length);

  return NextResponse.json({
    success: true,
    message: "Found matching notes.",
    semester: best.semester,
    cycle: best.cycle,
    subject: best.subject,
    keywords: best.keywords,
    notes_link: best.notesLink,
    score: bestScore,
    maxScore: queryWords.length,
    confidence,
  });
}
