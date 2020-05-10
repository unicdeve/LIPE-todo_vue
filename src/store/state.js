import todoList from "../data/todo-list";

let todo = todoList;
if (localStorage.todoList) {
  todo = JSON.parse(localStorage.getItem("todoList"));
} else {
  localStorage.setItem("todoList", JSON.stringify(todo));
}

let user = {};
if (localStorage.user) {
  user = JSON.parse(localStorage.getItem("user"));
}

export default {
  todoList: todo,
  selectedTodo: {},
  user,
  errors: {}
};
