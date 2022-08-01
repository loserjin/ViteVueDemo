<script setup>

</script>

<template>
  <div>
    <div class="linkStyle">
      <span class="routerLink">
        <h2><router-link to="/Home">Home</router-link></h2>
      </span>
      <span class="routerLink">
        <h2><router-link to="/watchDemo">watchDemo</router-link></h2>
      </span>
      <span class="routerLink">
        <h2><router-link to="/computedDemo">computedDemo</router-link></h2>
      </span>
      <span class="routerLink">
        <h2><router-link to="/lifestyleandsetup">lifestyleandsetup</router-link></h2>
      </span>
       <span class="routerLink">
        <h2><router-link to="/provide">provide</router-link></h2>
      </span>
    </div>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.linkStyle {
  display: flex;
}
.routerLink {
  margin: 5px;
  display: inline-block;
  font-size: 15px;
}
</style>
