import addressBook from "../data/todo-list";

let book = addressBook;
if (localStorage.addressBook) {
  book = JSON.parse(localStorage.getItem("addressBook"));
  console.log("complaining");
} else {
  localStorage.setItem("addressBook", JSON.stringify(book));
}

let user = {};
if (localStorage.user) {
  user = JSON.parse(localStorage.getItem("user"));
}

export default {
  addressBook: book,
  selectedAddress: {},
  user,
  errors: {}
};
