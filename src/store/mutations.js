const saveTodos = todoList => {
  const todos = localStorage.getItem("todoList");
  if (todos) {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }
};

export default {
  appendTodo: (state, data) => {
    const todoList = [
      data,
      ...JSON.parse(localStorage.getItem("todoList"))
    ];

    saveTodos(todoList);
    state.todoList = todoList;
  },

  editTodo: (state, data) => {
    const todos = [...state.todoList];

    const index = todos.findIndex(todo => todo.title === data.title);

    if (index !== -1) {
      todos[index] = data;
      state.todoList = todos;
      saveTodos(state.todoList);
    }
  },
  markDone: (state, data) => {
    const todos = [...state.todoList];

    const index = todos.findIndex(todo => todo.title === data.title);

    data.done = !data.done
    if (index !== -1) {
      todos[index] = data;
      state.todoList = todos;
      saveTodos(state.todoList);
    }
  },

  removeTodo: (state, data) => {
    let todos = [...state.todoList];
    todos = todos.filter(todo => todo.title !== data.title);

    state.todoList = todos;
    saveTodos(state.todoList);
  },

  setUser: (state, user) => {
    state.user = user;
  },

  logoutUser: state => {
    state.user = {};
  },

  setErrors: (state, errors) => {
    state.errors = errors;
  },

  selectTodo: (state, todo) => {
    const todoList = [...state.todoList];
    if (todo.title) {
      state.selectedTodo = todoList.find(
        i =>
          i.title === todo.title &&
          i.done === todo.done
      );
    } else {
      state.selectedTodo = {};
    }
  }
};
