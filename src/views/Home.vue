<template>
  <div class="home">
    <div class="bio container">
      <div class="bg">
        <img src="../assets/images/BG.svg" alt="" />
      </div>
      <div class="avatar">
        <img src="../assets/images/avatar.png" alt="" class="img-fluid" />
      </div>
      <div class="left">
        <h1><span>Minh</span> <span>Nguyen</span></h1>
        <div class="title-job">UX/UI designer</div>
        <div class="content">
          I work from the user experience to the visual details and then
          transform these in working code. I am a minimal designer and I really
          like the simple and elegant style
        </div>
        <button class="button-tertiary">
          Hire me now
          <span class="material-icons-outlined"> arrow_forward </span>
        </button>
      </div>
      <div class="right">
        <div class="title">Contact</div>
        <div class="info">Minhnguyen1082000@gmail.com</div>
        <div class="info">+84 938 378 396</div>
        <div class="icons">
          <ion-icon name="logo-facebook"></ion-icon>
          <ion-icon name="logo-linkedin"></ion-icon>
          <ion-icon name="logo-figma"></ion-icon>
        </div>
      </div>
    </div>
    <div class="more-about"></div>
  </div>
</template>

<style lang="scss">
@import "../assets/scss/home.scss";
</style>

<script>
export default {
  name: "Home",
  components: {
    // HelloWorld
  },
};
</script>
