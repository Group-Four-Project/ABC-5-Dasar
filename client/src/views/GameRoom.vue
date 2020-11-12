<template>
  <div class="container">
    <div class="user">
      <OnlineUser />
      <OnlineUser />
    </div>

    <div class="alphabet"></div>

    <div class="box-chat">
      <div class="answer">
        <div class="form-chat">
          <div class="overflow-auto">
            Isi chat di sini
          </div>
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
import OnlineUser from '@/components/OnlineUser.vue'
export default {
  name: 'GameRoom',
  components: {
    OnlineUser
  }
}
</script>

<style>

</style>
