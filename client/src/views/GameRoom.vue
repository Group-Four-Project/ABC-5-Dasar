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
          <ChatBoxUser v-for="(msg, i) in messages" :key="i" :msg="msg"/>
            <form @submit.prevent="chat" class="input-chat">
            <input
             type="text" 
             v-model="message"
             placeholder="Jawab Disini"
             />
          </form>
        </div>
      </div>
      <div class="chat"></div>
    </div>
  </div>
</template>

<script>
import OnlineUser from "@/components/OnlineUser.vue";
import ChatBoxUser from "@/components/ChatBoxUser.vue"
export default {
  name: "GameRoom",
  data() {
    return {
      name: '',
      message: '',
      onlineUsers: [],
      messages: []
    }
  },
  methods : { 
    chat(messages) {
      let payload = { 
        name : this.name,
        message : this.message
      }
      this.$socket.emit('sendMessage', payload)
    }
  },
  sockets: {
    userLogin(onlineUsers) {
      this.name = localStorage.getItem("name");
      console.log(onlineUsers[1], "<<< CURRENT USERS LOGGIN IN");
      this.onlineUsers = onlineUsers;
    },
   sendMessage(messages){
      this.messages = messages
    }


  },
  components: {
    OnlineUser,
    ChatBoxUser
  },
  created() { 
    this.name = localStorage.name
  }
};
</script>

<style>
</style>
