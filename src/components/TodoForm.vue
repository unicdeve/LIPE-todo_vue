<template>
  <div id="form-container">
    <h5 v-if="!selectedTodo.title">Add new todo</h5>
    <h5 v-else>Edit todo</h5>
    <b-form @submit.prevent="handleSubmit" v-if="show">
      <b-form-group id="input-group-2">
        <b-form-input id="title" v-model="formData.title" required placeholder="Enter title"></b-form-input>
      </b-form-group>

      <b-form-checkbox
      id="done"
      v-model="formData.done"
      name="done"
      class="mb-4"
    >
      Done
    </b-form-checkbox>

      <b-button type="button" v-if="btnText === 'Edit'" class="mr-2" @click="handleCancel">Cancel</b-button>
      <b-button type="submit" variant="primary">{{ btnText }}</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex"

export default {
  name: "TodoForm",
  computed: {
    ...mapState(["errors", "selectedTodo"])
  },

  data() {
    return {
      show: true,
      btnText: "Add",
      formData: {
        title: "",
        done: false
      }
    };
  },
  methods: {
    ...mapActions(["addTodo", "editTodo", "selectTodo"]),
    handleSubmit() {
      if (this.selectedTodo.title) {
        this.editTodo(this.formData);
        this.selectTodo({});
      } else {
        this.addTodo(this.formData);
      }

      this.resetForm();
    },

    resetForm() {
      this.formData = {
        title: "",
        done: false
      };
    },

    handleCancel() {
      this.btnText = "Add";
      this.selectTodo({});
      this.resetForm();
    }
  },
  updated: function() {
    this.$nextTick(function() {
      if (this.errors.general) this.showErrors = true;
      else this.showErrors = false;

      if (this.selectedTodo.title) {
        this.btnText = "Edit";
      } else {
        this.btnText = "Add";
      }
    });
  },
  watch: {
    selectedTodo(newValue, oldValue) {
      if (newValue.title) {
        this.formData = newValue;
      }
    }
  }
};
</script>

<style lang="scss">
  #form-container {
     @media only screen and (max-width: 800px) {
       margin: 0 2rem;
     }
  }
</style>
