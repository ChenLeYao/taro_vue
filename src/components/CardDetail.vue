<template>
    <div class="theme gray" id="theme">
        <div class="back-line">
            <a class="back" @click="goback">
            </a>
           {{ detail.card_name }}
        </div>
        <div class="card-detail">
            <div class="card-image">
                <img :src="detail.image_detail">
            </div>
            <div class="card-content">
                <h2 class="card-name">{{ detail.english_name }}</h2>
                    <span>关键词</span>
                    <ul class="card-tag">
                        <li v-for="( item , index ) in tag_group" :key="index">{{ item }}</li>
                    </ul>
                    <div  class="card-line"></div>
                    <div class="card-info">
                        <ul>
                            <li v-for="( item , index ) in article" :key="index">
                                <h3>{{ item.section_title}}</h3>
                                <div>
                                    <p>{{ item.content}}</p>
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
        name: "CardDetail",
        data :function () {
            return {
                detail : {

                },
                tag_group : [

                ],
                article : [
                    {  section_title : '' , content : '' }
                ]
            }
        },
        methods : {
           getCardDetail:function ( id ) {
               var _this = this;
               request.post('card_detail', { id : id } ,function (data) {
                   if ( data.code == 1 ){
                       _this.detail = data.detail;
                       _this.tag_group = _this.detail.tag.split(',');
                       var section_title = _this.detail.section_title.split('$');
                       var content = _this.detail.content.split('$');
                       section_title.forEach(function(item , index ){
                           _this.article.push({
                               section_title :section_title[index] ,
                               content : content[index]
                           })
                       });
                   }else{
                       console.log(data.message);
                   }
               })

           },
            goback : function () {
                this.$router.go(-1);
            }
        },
        created() {
              if ( this.$route.params.id != undefined){
                  var id = this.$route.params.id;
                  this.getCardDetail(id);
              }
        }
    }
</script>

<style scoped>

</style>
