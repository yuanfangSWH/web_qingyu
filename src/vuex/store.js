import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({

  state: {
    //公告单条数据
    gongao: [],
    //海报单条数据
    haibao: []
  },
  mutations: {
    //存储公告单条数据
    gonStorage(state, data) {
      state.gongao = data;
    },
    //存储海报单条数据
    haiStorage(state, data) {
      state.haibao = data;
    }
  }
});


export default store