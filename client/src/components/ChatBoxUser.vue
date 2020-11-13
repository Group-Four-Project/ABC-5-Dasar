<template>
    <div>
      <h3><i class="material-icons" style="color: #007af8; float: left">person</i>{{senderName}}</h3>  
      <p><i class="material-icons" style="color: #868D96;">edit</i>{{msg}}</p>
    </div>
</template>

<script>
export default {
  name: "ChatBoxUser",
  props: ['msg'], 
  data () { 
    return { 
      senderName: localStorage.getItem('name')
    }
  }
}
</script>