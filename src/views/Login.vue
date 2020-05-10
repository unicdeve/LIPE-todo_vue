<template>
  <div id="login-container">
    <h1 class="mb-2 mb-lg-5">LIPE Todo: Login</h1>
    <LoginForm />
  </div>
</template>

<script>
import { mapState } from "vuex";
import LoginForm from "@/components/LoginForm.vue";

export default {
  name: "Login",
  computed: {
    ...mapState(["user"])
  },
  components: {
    LoginForm
  },
  mounted() {
    this.$nextTick(function() {
      const user = localStorage.getItem("user");
      if (user) this.$router.push("/");
    });
  }
};
</script>

<style lang="scss" scope>
#login-container {
  min-height: calc(100vh - 150px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 800px) {
    h1 {
      font-size: 1.5rem;
    }
  }
}
</style>
