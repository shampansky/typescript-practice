// create type object

type ExistingToDo = {
  id: string;
  title: string;
  completed: boolean;
};

type NewToDo = Omit<ExistingToDo, 'id'>;

type ToDoSelected = Omit<ExistingToDo, 'id' | 'title'>;

type ProperToDoSelected = Pick<ExistingToDo, 'completed'>;

// create type with omitted properties

// create type with picked properties

crypto.randomUUID(); //?
