<template>
    <div>
      <h3>{{senderName}}</h3>  
      <p>{{msg}}</p>
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