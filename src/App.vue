<template>
  <div id="app">
    <ProjectRegister/>
  </div>
</template>

<script>

import ProjectRegister from './views/ProjectRegister.vue';
export default {
  name: 'App',
  components: {
    ProjectRegister
  },
 
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
table {
  border: 1px solid black;
  width: 100%;
}
body{
  background-color:rgb(170, 172, 174);
}
caption{
  text-align: left;
}
html,body {
  height:100%;
  min-height:100%;
  max-height:100%;
}
</style>
