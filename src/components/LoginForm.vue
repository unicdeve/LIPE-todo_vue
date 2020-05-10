<template>
  <div id="login-form-container">
    <b-form @submit.prevent="handleSubmit" v-if="show">
      <b-form-group id="input-group-2">
        <b-form-input
          id="username"
          v-model="formData.username"
          required
          placeholder="Username"
          @change="handleChange"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3">
        <b-form-input
          type="password"
          id="password"
          v-model="formData.password"
          placeholder="Password"
          required
          @change="handleChange"
        ></b-form-input>
      </b-form-group>

      <b-alert v-model="showErrors" variant="danger" dismissible>{{ errors.general }}</b-alert>

      <b-button type="submit" variant="primary" block>Log in</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "AddressForm",
  computed: {
    ...mapState(["user", "errors"])
  },
  data() {
    return {
      show: true,
      showErrors: false,
      formData: {
        username: "admin",
        password: "admin"
      }
    };
  },
  methods: {
    ...mapActions(["login", "clearError"]),
    handleSubmit() {
      this.login(this.formData);
      this.formData = {
        username: "",
        password: ""
      };
    },
    handleChange(e) {
      this.clearError();
    }
  },
  updated: function() {
    this.$nextTick(function() {
      if (this.errors.general) this.showErrors = true;
      else this.showErrors = false;

      if (this.user.username) this.$router.push("/");

      if (this.selectedAddress.name) this.formData = this.selectedAddress;
    });
  }
};
</script>

<style lang="scss">
#login-form-container {
  width: 80%;

  @media only screen and (min-width: 1000px) {
    width: 35%;
  }
}
</style>
