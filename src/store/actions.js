import users from "../data/users";

export default {
  login: ({ commit }, data) => {
    const errors = {};
    const user = users.find(
      user => user.username === data.username && user.password === data.password
    );

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));

      commit("setUser", user);
    } else {
      errors.general = "Wrong username/password";
      commit("setErrors", errors);
    }
  },
  logout: ({ commit }) => {
    localStorage.removeItem("user");
    commit("logoutUser");
  },
  clearError: ({ commit }) => {
    commit("setErrors", {});
  },
  addTodo: ({ commit }, todo) => {
    commit("appendTodo", todo);
  },
  editTodo: ({ commit }, todo) => {
    commit("editTodo", todo);
  },
  markDone: ({ commit }, todo) => {
    commit("markDone", todo);
  },
  selectTodo: ({ commit }, todo) => {
    commit("selectTodo", todo);
  },
  deleteTodo: ({ commit }, todo) => {
    commit("removeTodo", todo);
  }
};
