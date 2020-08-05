import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
localStorage.setItem('list' , [
    {
        type : '' ,
        name :'商品1' ,
        price :2000 ,
        count : 1
    } ,
    {
        type : '' ,
        name :'商品1' ,
        price :10 ,
        count : 1
    },
    {
        type : '' ,
        name :'商品1' ,
        price : 50 ,
        count : 1
    }

]);
let store = new Vuex.store({
    state : {
        cart : JSON.parse(localStorage.getItem('list'))
    }
})

console.log(store);