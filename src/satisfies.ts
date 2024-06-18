type SimpleNote = {
  date: string | Date;
  content: string;
  tags?: string[];
};

const todayNote = {
  date: '2024-06-18',
  content: "Don't forget keys",
} satisfies SimpleNote;

todayNote.date.length;
