<template>
  <div class="container">
    <div class="header-logo">
      <img src="../assets/img/abc.svg" alt="">
    </div>
    <div class="box-login">
      <div>
        <img src="../assets/img/Screenshot from 2020-11-13 02-07-52.png" style="margin-top: 30px" alt="">
        <div class="gTitle">
          <span>MAIN LANGSUNG</span>
        </div>
      </div>
      <form class="form-group mt-3" @submit.prevent="login">
        <input
          v-model="username"
          type="text"
          class="form-control"
          placeholder="Enter your username here"
        />
        <div class="form-group form-check "></div>
        <button type="submit" class="button btYellowBig">Enter Game</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      // onlineUsers: [],
      username: "",
    };
  },
  methods: {
    login() {
      console.log('User is logged in')
      console.log(this.username)
      localStorage.setItem("name", this.username);
      this.$socket.emit("userLogin", { name: this.username});
      this.$router.push({ name: "GameRoom" });
    },
  }
}
</script>

<style scoped>

</style>