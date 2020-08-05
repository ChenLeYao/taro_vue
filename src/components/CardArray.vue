<template>
    <div class="theme" id="theme">
        <div class="divine">
            <h1 class="title">塔罗牌阵</h1>
            <div class="card-array-wrap" v-for="( item ,index ) in list" :key="index" v-bind:class=" index== 0 ? '' : 'no-radius'">
                <h1 class="card-title">{{ item.class_name }}</h1>
                <ul class="card-array">
                    <li v-for="( listItem ,listIndex ) in item.child_list" :key="listIndex" @click="cardArrayDetail(listItem.id)">
                        <div class="wrap">
                            <div class="image">
                                <img :src="listItem.image_face">
                            </div>
                            <div  class="title">
                                <h2>{{ listItem.title}}</h2>
                                <div class="content">
                                    {{ listItem.tag }}
                                </div>
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
        name: "CardArray",
        data :function () {
            return {
                list : [
                    {
                        class_name : '综合牌阵',
                        child_list : [
                            {
                                image_face : '' ,
                                title : '感情发展',
                                tag : '是非判断 ，单日运运程'
                            }
                        ]
                    },
                    {
                        class_name : '爱情牌阵',
                        child_list : [
                            {
                                image_face : '' ,
                                title : '感情发展',
                                tag : '是非判断 ，单日运运程'
                            }
                        ]
                    }
                ]
            }
        },
        methods:{
            getCardList : function () {
                var _this = this;
                request.get('card_array_all','' ,function (data) {
                    if ( data.code == 1 ){
                        _this.list = data.list;
                        console.log(_this.list);
                    }else{
                        console.log(data.message);
                    }
                })
            },
            cardArrayDetail:function (id) {
                this.$router.push(
                    {
                        path : `/CardArrayDetail/${id}`
                    }
                )
            }
        },
        created() {
           this.getCardList();
        }
    }
</script>

<style scoped>

</style>
