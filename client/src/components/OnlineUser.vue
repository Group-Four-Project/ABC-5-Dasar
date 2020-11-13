<template>
  <div class="online-user">
      <div class="icon-sidebar">
        <img id="user-avatar" src="../assets/avatars/ni.svg" alt="" />
      </div>
      <div class="name-avatar">
        <p>Manje</p>
      </div>
      <div class="point-avatar">
        <span>106 poin</span>
      <div class="user-card">
        <img id="user-avatar" src="../assets/avatars/userbot.svg" alt="" />
        <div class="user-detail" v-if="user">
          <h6>{{ user.name }}</h6>
          <p>100 points</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	name: "OnlineUser",
	props: ['user']
};
</script>
