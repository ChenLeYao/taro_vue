<template>
    <div class="theme gray" id="theme">
        <div class="back-line">
            <a class="back" @click="goback">

            </a>
            占卜方法
        </div>
        <div class="taro-bg">
            <div class="taro-array-title">占卜你的事业</div>
            <div class="taro-array">
                <div>
                    <img src="../assets/image/six_.png">
                </div>
                <div>
                    <img src="../assets/image/six_.png">
                </div>
                <div>
                    <img src="../assets/image/six_.png">
                </div>
            </div>
            <div class="taro-action">
                <div class="button">
                    开始洗牌
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DivineDetail",
        data : function () {
            return {

            }
        },
        methods : {
            goback : function(){
                this.$router.go(-1);
            }
        },
        created() {
        }
    }
</script>

<style scoped>

</style>
