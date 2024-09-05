export type projectType = {
  id: string;
  image: string;
  projectName: string;
  projectContent: string;
  description: string;
  url: string[];
  date: string;
  skill: string[];
  function: string;
  contribution: {
    title: string;
    contents: string[];
  }[];
  trouble: {
    title: string;
    problem: string;
    cause: string;
    solve: string;
  }[];
};

export type interviewType = {
  question: string;
  answer: string;
};

export type careerType = {
  date: string;
  company: string;
  position: string;
  contents: string[];
};

export type reviewType = {
  profile: string;
  name: string;
  team: string;
  content: string;
};
