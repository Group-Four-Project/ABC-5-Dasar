<template>
  <div class="container">
    <div class="user">
      <OnlineUser v-for="(user, i) in onlineUsers" :key="i" :user="user" />
      <OnlineUser />
    </div>

    <div class="alphabet"></div>

    <div class="box-chat">
      <div class="answer">
        <div class="form-chat">
          <div class="overflow-auto">Isi chat di sini</div>
          <form class="input-chat" action="">
            <input type="text" placeholder="Jawab Disini" />
          </form>
        </div>
      </div>
      <div class="chat"></div>
    </div>
  </div>
</template>

<script>
import OnlineUser from "@/components/OnlineUser.vue";
export default {
  name: "GameRoom",
  data() {
    return {
      onlineUsers: [],
    };
  },
  sockets: {
    userLogin(onlineUsers) {
      this.name = localStorage.getItem("name");
      console.log(onlineUsers[1], "<<< CURRENT USERS LOGGIN IN");
      this.onlineUsers = onlineUsers;
    },
  },
  components: {
    OnlineUser,
  },
};
</script>

<style>
</style>
