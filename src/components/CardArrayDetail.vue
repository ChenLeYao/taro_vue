<template>
    <div class="theme gray" id="theme">
        <div class="back-line">
            <a class="back" @click="goback">
            </a>
            {{detail.title}}
        </div>
        <div class="card-array-detail">
            <div class="card-array-para">{{detail.content}}</div>
            <div class="image">
                <img :src="detail.image_face">
            </div>
            <p class="card-array-para">{{detail.para}}</p>
        </div>
    </div>
</template>

<script>
    import request from "../assets/js/ajax";
    export default {
        name: "CardArrayDetail",
        data : function () {
            return {
                detail : {
                    content : '',
                    image_face :'',
                    para : ''
                }
            }
        },
        methods : {
            getCardDetail:function ( id ) {
                var _this = this;
                request.post('card_array_detail', { id : id } ,function (data) {
                    if ( data.code == 1 ){
                        _this.detail = data.detail;

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
