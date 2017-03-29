import shop from '../../api/index'
import * as types from '../mutation-types'
import axiosInstance from "../../api/index"
// initial state
// shape: [{ id, quantity }]
const state = {
  data: [],
};



// actions
const actions = {

    getData({commit}){
      return axiosInstance.get('/usage_frequency', {
          params: {
              ID: 12345
          }
      })
          .then(function (response) {
              console.log(response);
              if(response.status==200){
                commit(types.GET_CHART_DATA,response.data?response.data.data:{})
              }
          })
          .catch(function (error) {
              console.log("失败",error);
          });
    }
}

// mutations
const mutations = {
  [types.GET_CHART_DATA] (state, { frequency }) {

    if(frequency && frequency.length!=0){
      state.data=frequency

    }
  },
};

export default {
  state,
  actions,
  mutations
}
