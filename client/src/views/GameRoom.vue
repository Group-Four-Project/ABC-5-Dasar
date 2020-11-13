<template>
  <div class="container">
    <div class="user">
      <OnlineUser v-for="(user, i) in onlineUsers" :key="i" :user="user" />
      <OnlineUser />
    </div>
    <GameCategory />
    <ChatBox />
  </div>
</template>

<script>
import OnlineUser from "@/components/OnlineUser.vue";
import ChatBox from "@/components/ChatBox.vue" 
import GameCategory from "@/components/GameCategory.vue"

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
    ChatBox,
    GameCategory
  },
};
</script>

<style>
</style>
