<template>
  <div class="container">
    <div class="user">
      <OnlineUser v-for="(user, i) in onlineUsers" :key="i" :user="user" />
    </div>

    <div class="alphabet">
      <div class="d-flex justify-content-center align-self-end">
          <button @click="letterRandom" type="button" class="btn btn-primary">Generate Letter</button>                 
      </div>
      <h1>{{letter}}</h1>
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
import OnlineUser from "@/components/OnlineUser.vue"
import ChatBoxUser from "@/components/ChatBoxUser.vue"

export default {
  name: "GameRoom",
  data() {
    return {
      name: '',
      message: '',
      letter: '',
      onlineUsers: [],
      messages: [], 
    }
  },
  computed: {     
    alphabet () { 
      return this.$store.state.alphabet
    }
  },
  methods : { 
    chat(messages) {
      let payload = { 
        message : this.message
      }
      this.$socket.emit('sendMessage', payload)
    }, 
    letterRandom () { 
      this.$store.dispatch('letterRandom')  
      this.$socket.emit('showLetter', this.$store.state.alphabet);
    },

    gameOver () { 
      localStorage.clear()
      this.$socket.emit('gameOver')
    }

  },
  sockets: {
    userLogin(onlineUsers) {
      this.name = localStorage.getItem("name");
      this.onlineUsers = onlineUsers;
    },
   sendMessage(data){
      this.messages = data
      console.log(this.messages, '<<< sendMessage');

    },
    showLetter(letter) { 
      this.letter = letter
    },
     showHistory(messages) { 
       this.messages = messages
     },
     gameOver() { 
       // display dengan sweat alert 
     }

  },
  components: {
    OnlineUser,
    ChatBoxUser
  }, 
  created() { 
    this.$socket.emit('showHistory')
  }
};
</script>
