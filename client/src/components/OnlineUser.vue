<template>
  <div class="online-user">
      <div class="user-card">
        <img id="user-avatar" src="../assets/avatars/n.svg" alt="" />
        <div class="user-detail" v-if="user">
          <h6>{{ user.name }}</h6>
          <p>100 points</p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "OnlineUser",
  props: ["user"],
};
</script>
