<template>
  <div id="todo-container">
    <b-list-group v-if="todoList">
      <b-list-group-item v-for="(todo, i) in todoList" :key="`${i}`">
        <div>
          <span class="title" :class="{done: todo.done}">{{ todo.title }}</span>
        </div>

        <div class="icons-container">
          <b-icon
            icon="trash-fill"
            variant="success"
            v-b-tooltip.hover
            title="delete"
            class="mr-2"
            @click="handleDelete(todo)"
          />
          <b-icon
            icon="pencil"
            variant="success"
            v-b-tooltip.hover
            title="edit"
            class="mr-2"
            @click="handleEdit(todo)"
          />
          <b-icon
            icon="check"
            variant="success"
            v-b-tooltip.hover
            :title="todo.done === true ? 'unmark': 'mark'"
            @click="markDone(todo)"
          />
        </div>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "TodoList",
  computed: {
    ...mapState(["todoList"])
  },
  methods: {
    ...mapActions(["selectTodo", "deleteTodo", "markDone"]),
    handleEdit(todo) {
      this.selectTodo(todo);
    },
    handleDelete(todo) {
      this.deleteTodo(todo);
    }
  }
};
</script>

<style lang="scss">
#todo-container {
  width: 80%;
  max-width: 550px;

  .list-group {
    color: #333;
    line-height: 1.1;

    .list-group-item {
      display: flex;
      justify-content: space-between;

      .title{
        font-weight: 900;
      }

      .done {
        font-weight: 300;
        text-decoration: line-through;
        text-decoration-color: tomato;
        font-style: italic;
      }

      .icons-container {
        display: none;

        @media only screen and (max-width: 800px) {
          display: inline-block;
        }

        svg {
          cursor: pointer;
        }
      }

      &:hover {
        background: #f5f5f5;

        .icons-container {
          display: inline-block;
        }
      }
    }
  }
  @media only screen and (max-width: 800px) {
    h1 {
      font-size: 1.5rem;
    }
  }
}
</style>
