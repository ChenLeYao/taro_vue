<template>
    <div class="theme" id="theme">
        <div class="theme-title">今日塔罗</div>
        <div class="svg-wrap">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="100%" width="100%">
                <image xlink:href="../assets/image/main.png"  width ="100%" height="100%">
                </image>
                <image class="svg-img" x="35%" y="10%" :xlink:href="detail.image_face"   width ="1.7rem" height="3rem">
                </image>
                <line x1="80" y1="2%" x2="80" y2="98%" style="stroke: #949599;"  stroke-width="2"/>
                <line x1="10%" y1="85%" x2="90%" y2="85%" style="stroke: #949599;"  stroke-width="2"/>
                <text x="50%" y="8%" fill="#ffffff">{{  detail.title }}</text>
                <text x="8%" y="8%" fill="#ffffff" transform="rotate(90 , 45 ,45 )">{{detail.calender}}</text>
                <text x="18%" y="8%" fill="#ffffff" transform="rotate(90 , 85 ,54 )">{{detail.date_string}}</text>
                <text x="12%" y="90%" fill="#949599" >每日</text>
                <text x="12%" y="94%" fill="#949599" >一言</text>
                <router-link to="/CardDetail/1">
                    <text x="42%" y="79%" fill="#73b1d8" >点击查看牌面详解 > </text>
                </router-link>
                <text x="28%" y="90%" fill="#ffffff" >
                   {{ detail.saying}}
                </text>
                <text x="28%" y="94%" fill="#ffffff" >
                    路口
                </text>
            </svg>
        </div>
    </div>
</template>

<script>
    import request from "../assets/js/ajax";
    export default {
        name: "Index" ,
        data : function () {
            return {
              detail : {
                  title : '',
                  image_face : '',
                  calender : '',
                  data_string : '',
                  saying : ''
              },
                col : {}
            }
        },
        methods : {
            getCardDay : function () {
                var _this = this;
                var id  =1 ;
                request.post('card_day', { id : id }  ,function (data) {
                    console.log(typeof data);
                    if ( data.code == 1 ) {
                        _this.detail = data.detail;
                        _this.path_1 = _this.detail.image_face;
                    }
                });

            }
        },
        created() {
            this.getCardDay();
        },
        cardDetail:function (id) {
            this.$router.push(
                {
                    path : `/CardDetail/${id}`
                }
            )
        }
    }
</script>

<style scoped>

</style>
