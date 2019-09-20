import Vue from 'vue';
import {get,post,put,del} from './axios'
Vue.prototype.$get=get;
Vue.prototype.$post=post;
Vue.prototype.$put=put;
Vue.prototype.$del=del;

//获取列表数据
const getToDoData = "接口地址";

export const getToDo = function(json) {
  return Vue.prototype.$post(getToDoData,json)
}
