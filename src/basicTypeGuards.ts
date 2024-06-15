type ExtendedToDo = {
  title: string;
  priority: 'high' | 'normal' | 'low';
  isComplete: boolean;
  description?: string;
  dueDate: Date | string;
};

// write a function in which we get autocomplete for dueDate, for description
// narrow down type of priority with switch statement

const handleToDoItem = (toDoItem: ExtendedToDo) => {
  if (toDoItem.dueDate instanceof Date) {
    console.log(toDoItem.dueDate);
    return;
  }

  console.log(toDoItem.dueDate);
  const desc = toDoItem.description!;
  console.log(desc.length);

  switch (toDoItem.priority) {
    case 'high':
      console.log(toDoItem.priority);
      break;
    case 'low':
      console.log(toDoItem.priority);
      break;
    default:
      console.log(toDoItem.priority);
  }
};

// create form selection with manually exclude null in its type
// add submit event listener to this element

const form = document.querySelector<HTMLFormElement>('.form')!;

form.addEventListener('submit', (e) => e.preventDefault());
