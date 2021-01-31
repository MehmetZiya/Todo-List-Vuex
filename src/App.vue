<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">ToDo's</router-link>
      <span class="icon"><i class="fas fa-arrows-alt-h fa-2x"></i></span>
      <router-link to="/about">About</router-link>
    </div>
    
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #13579b;
  
}

body{
  background-color:lightblue;
}

#nav {
  padding: 30px;
  background-color: rgb(210, 247, 80);
}

#nav a {
  font-size: 30px;
  font-weight: bold;
  color: #5287bd;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #0b0d80;
}
.icon{
  margin: 0 10px;
  color: lightblue;
}
</style>
