<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/todo">Tareas</router-link> |
      <router-link to="/about/axios">Axios</router-link> |
      <router-link to="/gym">Gym</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="stylus">
*,
*::before
*::after
  box-sizing: border-box

html
  font-size: 100%

#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
