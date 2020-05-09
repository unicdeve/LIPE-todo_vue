<template>
  <div id="app">
    <Header :isAuthenticated="isAuthenticated" :logout="handleLogout" />
    <div class="router-view-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Header from "@/components/Header.vue";

export default {
  components: {
    Header
  },
  computed: {
    ...mapState(["user"])
  },
  data() {
    return {
      isAuthenticated: false
    };
  },
  updated() {
    this.$nextTick(function() {
      if (this.user.username) this.isAuthenticated = true;
      else {
        this.$router.push("/login", () => {});
        this.isAuthenticated = false;
      }
    });
  },
  mounted() {
    this.$nextTick(function() {
      if (this.user.username) this.isAuthenticated = true;
      else this.isAuthenticated = false;
    });
  },
  methods: {
    ...mapActions(["logout"]),
    handleLogout() {
      this.logout();
      this.isAuthenticated = false;
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  .router-view-container {
    display: flex;
    flex-direction: column;
    margin: 2rem 15rem;

    @media only screen and (max-width: 800px) {
      margin: 1rem auto;
    }
  }
}
</style>
