<script setup></script>

<template>
  <div>
    <div class="linkStyle">
      <span class="routerLink">
        <h1><router-link to="/Home">Home</router-link></h1>
      </span>
      <span class="routerLink">
        <h1><router-link to="/watchDemo">watchDemo</router-link></h1>
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
