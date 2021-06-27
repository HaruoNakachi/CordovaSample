<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
 
#menu{
  margin:50px 0 10px 0;
  display: block;

}
#menu a {
  font-weight: bold;
  color: #2c3e50;
  text-align: center;
  padding: 0 5px;
}

#menu a.router-link-exact-active {
  color: #42b983;
}
</style>
