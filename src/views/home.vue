<template>
  <div id="appWrap">
    <div id="nav">
      <div><router-link to="/">待办</router-link></div>
      <div><router-link to="/h/yb">已办</router-link></div>
      <div><router-link to="/h/gz">关注</router-link></div>
    </div>
     <router-view/>
  </div>
</template>

<style lang="less">
*{
  margin:0px;
  padding:0px;
}
#appWrap {
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
  line-height:44px;
  color:#fff;
  text-decoration: none;
}

</style>
