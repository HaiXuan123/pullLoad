<template>
  <div class="detail">
    <h1>我是详情页</h1>
    <h3>{{tit}}</h3>
  </div>
</template>
<script>
export default {
  name: 'datail',
  data () {
    return {
      tit: ''
    }
  },
  mounted () {
    // console.log("详情页：",this.$route,this.$route.query);
    this.tit = this.$route.query.dbPath
  },
  methods: {

  }
}
</script>
<style scoped lang="scss">

</style>
