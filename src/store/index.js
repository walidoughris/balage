import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)
export const store=new Vuex.Store({
   state:{
       autheticated:false,
       user:null,
       credential:null,
       imagesList:[],
       projectImage:{
           name:'',
           url:null
       },
       model:false,
       showImgLoading:false
   }
})