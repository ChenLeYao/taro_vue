<template>
    <div class="theme" id="theme">
        <div class="divine all">
            <h1 class="title">占卜</h1>
            <ul class="divine-nav">
                <li  @click="changeIndex(index)"  :class="activeIndex == index ? 'active': ''" v-for="( item , index  ) in list" :key="index">
                    {{ item.class_name }}
                    <span class="line"></span>
                </li>
            </ul>
            <div>
                <ul class="divine-list"  :class="activeIndex == index ? 'active': ''" v-for="( item , index  ) in list" :key="index">
                    <li v-for="( listItem , listIndex  ) in item.child_list" :key="listIndex" @click="taroDetail">
                        <div class="image">
                            <img :src="listItem.image_face">
                        </div>
                        <div  class="title">
                            <h2>{{ listItem.title }}</h2>
                            <span class="type">所用排阵：时间占卜法</span>
                            <div class="content">
                                {{ listItem.content }}
                            </div>
                        </div>
                    </li>
                </ul>

            </div>
         </div>

    </div>

</template>

<script>
    import request from "../assets/js/ajax";
    export default {
        name: "Divine",
        data : function () {
            return {
                list : [
                    {   class_name: '',
                        child_list: [
                                {
                                    image_face: '',
                                    title: '',
                                    tag: '',
                                    id: '',
                                    content:''
                                }
                         ]
                    }
                ],
                activeIndex : 0
            }
        },
        methods : {
            getDivineList: function(){
                var _this = this;
                request.get('taro_list','' ,function (data) {
                    if ( data.code == 1 ){
                        _this.list = data.list;

                    }else{
                        console.log(data.message);
                    }
                })
            },
            changeIndex : function ( index ) {
                this.activeIndex  = index;
            },
            taroDetail:function () {
                 this.$router.push({
                     path : '/DivineDetail'
                 })
             }
        },
        computed : {

        },
        created() {
            this.getDivineList();
        }
    }
</script>

<style scoped>

</style>
