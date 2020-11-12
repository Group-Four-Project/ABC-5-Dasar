<template>
  <div class="home">
    <h1>ABC 5 Dasar</h1>
    <div class="enter-game-form container mt-5" style="width: 350px">
      <div class="row justify-content-center shadow rounded" style="">
        <div class="p-4">
          <form @submit.prevent="login">
            <div class="form-group">
              <label>Username</label>
              <input
                v-model="username"
                type="text"
                class="form-control"
                placeholder="Enter your username here"
              />
            </div>
            <div class="form-group form-check"></div>
            <button type="submit" class="login-btn">Enter Game</button>
          </form>
        </div>
      </div>
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
