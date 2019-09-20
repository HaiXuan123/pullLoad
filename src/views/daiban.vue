<template>
  <div>
    vant 实现下拉刷新，加载更多（下拉刷新有bug）
    <van-nav-bar style="margin-top:50px;background:pink" fixed title="数据列表" />
    <div class="list-content" id="list-content">
      <van-pull-refresh v-model="isDownLoading" @refresh="onRefresh" >
        <van-list v-model="isUpLoading" :finished="upFinished" @load="onLoad" :offset="10" loading="" loading-text=" " finished-text="没有更多了">
          <div class="list-item">
            <!-- <van-cell v-for="(item,index) in list" :key="index" :title="item.docName" /> -->
            <li v-for="(item,index) in list" :key="index" :msg="item.docName"  v-on:click="enterDetail($event,item)">
              <p>{{item.docName}}</p>
              <p>{{item.receivedTime}}</p>
            </li>
          </div>
          
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>


<script>
import { PullRefresh, NavBar, List } from "vant";
import { getToDo } from "../../service/api";

export default {
  name: "DaiBan",
  data() {
    return {
      userName: "010099900302",
      list: [],
      listData: [],
      strPageNumber:0,//当前在第几页
      totalPageNumber:1, //列表总页数
      isDownLoading:false,//下拉刷新
      isUpLoading:false,//上拉加载
      upFinished:false,//上拉加载完毕
      offset:10,//滚动条与底部距离小于 offset 时触发load事件
    };
  },
  component() {
    PullRefresh, NavBar, List;
  },
  created: function() {
    const { userName } = this;
    let jsonData = {
      userInfo: {
        username: userName
      },
      data:
        "<STRUSERCODE>" +
        userName +
        "</STRUSERCODE><STRTYPE>2</STRTYPE><STRPAGENUMBER>1</STRPAGENUMBER><STRPAGESIZE>20</STRPAGESIZE>"
    };
    // this.getList(jsonData);
  },
  methods: {
    getList(jsonData) {
      // 获取列表数据

      getToDo(jsonData).then(res => {
        let resData =
          res.jsonFirst.result["soapenv:Body"]["ns1:GETTODOResponse"]
            .GETTODOReturn["#text"];
        // console.log("resData:", resData);///输出拿到的数据
        if (resData.state === "1") {
          this.listData = resData.data;
          this.list = resData.data;
          this.totalPageNumber = resData.totalPageNumber;
          return null;
        } else {
          return null;
        }
      });
    },
    onRefresh() {
      const { userName } = this;
      let jsonData = {
        userInfo: {
          username: userName
        },
        data:
          "<STRUSERCODE>" +
          userName +
          "</STRUSERCODE><STRTYPE>2</STRTYPE><STRPAGENUMBER>1</STRPAGENUMBER><STRPAGESIZE>30</STRPAGESIZE>"
      };
     this.isDownLoading = true;

      try {
          
        getToDo(jsonData).then(res => {
          let resData =
            res.jsonFirst.result["soapenv:Body"]["ns1:GETTODOResponse"]
              .GETTODOReturn["#text"];
          if (resData.state === "1") {
            this.upFinished = false;
            this.isDownLoading = false;
            this.list = resData.data;
            // this.onLoad();
          } else {
          
            return null;
          }
        });
      } catch (error) {
       
        return null;
      }
    },
    onLoad() {//上拉加载    加载更多
      this.strPageNumber++;
      if (this.strPageNumber>this.totalPageNumber) {
        this.upFinished = true;
        return ;
      }
      this.isUpLoading = true;//发起异步操作并更新数据
      let { strPageNumber } = this;
      const { userName } = this;
      let jsonData = {
        userInfo: {
          username: userName
        },
        data:
          "<STRUSERCODE>" +
          userName +
          "</STRUSERCODE><STRTYPE>2</STRTYPE><STRPAGENUMBER>" +
          strPageNumber +
          "</STRPAGENUMBER><STRPAGESIZE>30</STRPAGESIZE>"
      };
      try {
        //   debugger;//加载更多
        getToDo(jsonData).then(res => {
            console.log("res:",res)
          let resData =
            res.jsonFirst.result["soapenv:Body"]["ns1:GETTODOResponse"]
              .GETTODOReturn["#text"];
          if (resData.state === "1") {

            
            this.list = [...this.list, ...resData.data];
            this.totalPageNumber=resData.totalPageNumber;
            console.log("加载更多出发后的list:",this.list)
           
           
           
            this.isUpLoading = false;
            
          } else {
             this.isUpLoading = false;
          }
        });
      } catch (error) {
         this.isUpLoading = false;
        return null;
      }
    },
    // 获取列表的数据  end,
    enterDetail (e, data) {
      // let obj = {
      //   dbPath: data.dbPath,
      //   documentId: data.documentId,
      //   serverName: data.serverName
      // }
      // this.$router.push({ path: '/Detail', query: obj })
    }
  },
  mounted() {
    let winHeight = document.documentElement.clientHeight; //视口大小
    document.getElementById("list-content").style.height = winHeight - 46 + "px"; //调整上拉加载框高度
  }
};
</script>

<style lang="less" >
.list-content {
  /* margin-top: 46px; */
  overflow: scroll;
}
.list-item {
  text-align: center;
}
.van-list__loading{
    display: none !important;
}


*{
  margin:0px;
  padding:0px;
}
ul,li{
  list-style: none;
}
.daiban,.list-item{
  width:100%;
  height:calc(100%-46px);
  overflow: hidden;
//   margin-top:46px;
//   ul{
    // width:100%;
    // height:100%;
    // overflow-x: hidden;
    // overflow-y: scroll;
    // -webkit-overflow-scrolling: scroll;
    li{
      width:95%;
      margin: 0 auto;
      padding:10px 0;
      border-bottom:1px solid #dedede;
      font-size:12px;
      p{
        &:nth-of-type(1){
          text-align: left;
        }
        &:nth-of-type(2){
          text-align: right;
        }
      }

    }

//   }
}
</style>
