<template>
  <div id="app">
    <!-- <div id="nav">
      <div><router-link to="/">待办</router-link></div>
      <div><router-link to="/yb">已办</router-link></div>
      <div><router-link to="/gz">关注</router-link></div>
    </div> -->
    <!-- <Home/> -->

    <router-view/>
  </div>
</template>
<script>

import Home from '@/views/home.vue'
export default {
  name: 'daiban',
  components: {
    Home
  }
}
</script>
<style lang="less">
*{
  margin:0px;
  padding:0px;
}
html,body{
  height:100%;
}
#app {
  height:100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav{
  width:100%;
  height:44px;
  display: flex;
  // flex:1;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  left:0;
  top:0;
  z-index:1;
}
#nav div{
  height:100%;
  text-align: center;
  background-color:red;
  flex-grow:1;
  border-right:1px solid #fff;
}
#nav div:last-child{
  border:none;
}
#nav div a{
  width:100%;
  display: inline-block;
  line-height:44px;
  color:#fff;
  text-decoration: none;
}

</style>
