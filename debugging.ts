type ExtendedToDo = {
  title: string;
  priority: 'high' | 'normal' | 'low';
  isComplete: boolean;
  description?: string;
  dueDate: Date | string;
};

const newToDoItem: ExtendedToDo = {
  title: 123,
  isComplete: 22,
  priority: 32,
  description: 'test',
  random: 'none',
};
