<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import Index from './components/Index.vue'

import  useRem from './assets/js/rem.js';
export default {
  name: 'App',
  components: {

  },
  data : function(){
    return {
      navList : [
        {
          class :'active' ,
          icon : 'icon-1' ,
          name : '每日',
          path : 'Index'
        },
        {
          class :'active' ,
          icon : 'icon-2' ,
          name : '每日',
          path : 'Index'
        },{
          class :'active' ,
          icon : 'icon-3' ,
          name : '每日',
          path : 'Index'
        },{
          class :'active' ,
          icon : 'icon-4' ,
          name : '每日',
          path : 'Index'
        },{
          class :'active' ,
          icon : 'icon-5' ,
          name : '每日',
          path : 'Index'
        },
      ]
    }
  },
  methods:{
    rem : useRem
  },
  created() {

  },
  mounted() {
    this.rem();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
