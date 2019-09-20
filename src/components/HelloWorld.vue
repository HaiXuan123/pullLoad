<template>
  <div class="hello">
    目前没有用到“helloWord”此组件
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>

import { getToDo } from '../../service/api'
export default {
  name: 'HelloWorld',
  props: {
    msg: 11111
  },
  mounted () {
    // this.getData();
    // console.log(process)
    let jsonData = {
      userInfo: {
        username: '010099900302'
      },
      data:
      '<STRUSERCODE>010099900302</STRUSERCODE><STRTYPE>1</STRTYPE><STRPAGENUMBER>1</STRPAGENUMBER><STRPAGESIZE>20</STRPAGESIZE>'
    }
    this.getToDoFn(jsonData)
  },
  methods: {
    getToDoFn (aa) {
      getToDo(aa).then(res => {
        console.log('请求到了：', res)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
