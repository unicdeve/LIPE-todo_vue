<template>
  <div id="home-container">
    <h1 class="text-center mb-3 mb-lg-5">Welcome to your LIPE todos..</h1>

    <div class="todo-container">
      <TodoList />
      <div class="todo-form-container">
        <TodoForm />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import TodoList from "@/components/TodoList.vue";
import TodoForm from "@/components/TodoForm.vue";

export default {
  name: "Todo",
  components: {
    TodoList,
    TodoForm
  },
  computed: {
    ...mapState(["user"])
  },
  mounted() {
    this.$nextTick(function() {
      if (!this.user.username) this.$router.push("/login");
    });
  }
};
</script>

<style lang="scss">
#home-container {
  .todo-container {
    display: flex;
    align-items: center;
    justify-content: center;

    .todo-form-container {
      margin-left: 2rem;
      width: 100%;

      @media only screen and (max-width: 800px) {
        margin: 2rem auto;
      }
    }

    @media only screen and (max-width: 800px) {
      height: 60vh;
        flex-direction: column;
    }
  }

  @media only screen and (max-width: 800px) {
    h1 {
      font-size: 1.5rem;
    }

    .list-form-container {
      flex-direction: column;
    }
  }
}
</style>
