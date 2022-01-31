<template>
  <div id="b" class="">
    <div class="nav container ">
      <router-link to="/">
        <img alt="Vue logo" src="./assets/Logo_text.png" />
      </router-link>
      <div>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/experience">Experience</router-link>
      </div>
    </div>
    <router-view />

    
  </div>
</template>

<style lang="scss" >
  @import "./assets/scss/app.scss";
</style>
<script>

export default {
  name: 'app',
  components: {
  },
  mounted() {
    let externalScript = document.createElement('script')
    externalScript.setAttribute('src', 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js')
    document.head.appendChild(externalScript)
  },
}
</script>
