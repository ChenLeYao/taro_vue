<template>
    <div class="theme" id="theme">
        <ul class="intro-nav">
            <li  @click="changeIndex(index)" v-for="( item , index ) in introduction" v-bind:class="activeIndex == index ? 'active' : '' " :key="item.name" >
                {{ item.name }}
                <span class="line"></span>
            </li>
        </ul>
        <div class="class-wrap">
            <div class="class-item " v-bind:class="activeIndex == index ? 'active' : '' "  v-for="( item ,index  ) in introduction" :key="item.name" >
                <div class="card-array-wrap " v-bind:class=" child_index== 0 ? '' : 'no-radius'"  v-for="( child , child_index ) in item.child_class" :key="child.name">
                    <h1 class="card-title">{{ child.name }}</h1>
                    <ul class="card-array" >
                        <li v-for="(list , listIndex ) in child.list" :key="list.name" @click="changeContentIndex( listIndex , child_index)" v-bind:class="contentBool && listIndex === contentIndex && child_index == childIndex? 'active' : '' ">
                            <div class="wrap">
                            <div class="image">
                                <img :src="list.image_face">
                            </div>
                            <div  class="title">
                                <h2>{{ list.title }}</h2>
                                <div class="content"  >

                                    {{ list.tag }}
                                </div>
                            </div>
                            </div>
                            <div  class="main">
                                <p style="text-align: center; margin-bottom: 0.1rem;">--{{ list.title }}--</p>
                                {{ list.content }}
                            </div>
                        </li>
                     </ul>
                </div>
            </div>
         </div>
    </div>
</template>

<script>
    import request from "../assets/js/ajax";
    export default {
        name: "Introduction",
        data : function () {
            return {
                introduction : [
                    { name: '塔罗简介',
                        child_class: [{
                            name: '起源|分类',
                            list: [
                                {
                                    image_face: '',
                                    title: '题目',
                                    tag: '标签'
                                },
                                {
                                    image_face: '',
                                    title: '题目',
                                    tag: '标签'
                                }
                            ]
                        }]
                    },
                    {
                        name: '视频介绍',
                        childClass: [{
                            name: '起源|分类',
                            list: [

                            ]
                        }]
                    }
                ],
                activeIndex : 0,
                contentIndex : 0 ,
                childIndex : 0,
                contentBool : false
            }
        },
        methods : {
          changeIndex : function ( index ) {
              this.activeIndex = index;
          },
          getIntroduction: function(){
              var _this = this;
                request.get('intro_all_list','' ,function (data) {
                    if ( data.code == 1 ){
                        _this.introduction = data.list ;
                    }else{
                        console.log(data.message);
                    }
                })
            },
            changeContentIndex:function ( index , childIndex ) {
              if ( this.contentIndex != index ){
                  this.contentIndex = index;
                  this.contentBool = true;
              }else{
                  this.contentBool = !this.contentBool;
              }
                this.childIndex = childIndex;
            }
        },
        computed : {

        },
        created() {
            this.getIntroduction();
        }
    }
</script>

<style scoped>

</style>
