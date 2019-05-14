import uuid4 from 'uuid/v4';

export const todos = [
    {
      id: uuid4(),
      isCompleted: true,
      text: "Cooking Food"
    },
    {
      id: uuid4(),
      isCompleted: false,
      text: "Read Book"
    },
    {
      id: uuid4(),
      isCompleted: false,
      text: "Writing paper"
    }
  ]