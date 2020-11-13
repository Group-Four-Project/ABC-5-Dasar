<template>
  <div class="container">
    <div class="user">
      <OnlineUser v-for="(user, i) in onlineUsers" :key="i" :user="user" />
      <OnlineUser />
      <OnlineUser />
      <OnlineUser />
      <OnlineUser />
      <OnlineUser />
    </div>

    <div class="alphabet">
      <div class="category">
        <div class="title-category">Tebak Nama Artis</div>
        <div class="col-category">
          <img class="image-category" src="../assets/img/category/Screenshot from 2020-11-13 10-55-26.png" style="" alt="">
        </div>
      </div>
      <div class="generate-letter">
        <div class="display-letter">Y</div>
        <div>
          <button class="button-letter" type="submit">Generate</button>
        </div>
      </div>
    </div>

    <div class="box-chat">
      <div class="answer">
        <div class="form-chat">
          <div class="interaction-answer">JAWABAN</div>
          <div class="overflow-auto">
          <i class="material-icons" style="color: #007af8;">edit</i>
            Isi chat di sini
          </div>
          <form class="input-chat" action="">
            <input type="text" placeholder="Jawab Disini" />
          </form>
        </div>
      </div>
      <div class="answer">
        <div class="form-chat">
          <div class="interaction-answer">OBROLAN</div>
          <div class="overflow-auto">
          <i class="material-icons" style="color: #007af8;">edit</i>
            Isi chat di sini
          </div>
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
