<template>
    <div class="theme" id="theme">
        <div class="wrap">
            <div class="card-face">
                <div class="logo">
                    <img src="../assets/image/six.png">
                </div>
                <div class="card-explain-box">
                    <p class="explain">塔罗牌牌面</p>
                    <p>塔罗共有七十八张,每张精致的纸牌都有它独特的图案和象征的含义</p>
                    <p>每一张塔罗牌都有它的象征,指出你的内在思想，潜意识动机，隐藏的恐惧和渴望</p>
                </div>
            </div>
            <div class="card-face-list" v-for="( item , index ) in list" :key="index" >
                <p class="card-class">
                    {{  item.class_name }}
                </p>
                <ul class="card-face-listitem">
                    <li v-for="( listItem , index ) in item.child_list" :key="index" @click="cardDetail(listItem.id)">
                        <a>
                            <img :src="listItem.image_face" >
                        </a>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script>
    import request from "../assets/js/ajax";
    export default {
        name: "CardFace" ,
        data :function () {
         return {
             list : [
                 {
                     class_name : '大阿卡纳牌',
                     child_list : [
                         {
                             image_face : '' ,
                             card_name : ''
                         }
                     ]
                 },
                 {
                     class_name : '小阿卡纳牌',
                     child_list : [
                         {
                             image_face : '' ,
                             card_name : ''
                         }
                      ]
                 }
             ]

         }
       },
        methods : {
            getCardList : function () {
                var _this = this;
                request.get('card_list_all','' ,function (data) {
                    if ( data.code == 1 ){
                       _this.list = data.list;
                        console.log('-----');
                        console.log(_this.list);
                    }else{
                        console.log(data.message);
                    }
                })
            },
            cardDetail:function (id) {
                this.$router.push(
                    {
                        path : `/CardDetail/${id}`
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
