<template>
    <div style="height:100%">
    <router-view></router-view>
    <footer class="foot" id="foot">
        <div :class="activeIndex == index? 'active':''" @click="changeIndex( index , item.path  )" v-for="( item ,index ) in tabList" :key="index">
            <a >
                <span :class="item.icon">{{ item.title }}</span>
            </a>
        </div>
    </footer>
    </div>
</template>

<script>
    export default {
        name: "Container",
        data : function () {
            return {
                tabList: [
                    {
                        path : '',
                        icon : 'icon-1',
                        title : '每日'
                    },
                    {
                        path : 'Introduction',
                        icon : 'icon-2',
                        title : '简介'
                    },
                    {
                        path : 'Divine',
                        icon : 'icon-3',
                        title : '占卜'
                    },
                    {
                        path : 'CardFace',
                        icon : 'icon-4',
                        title : '牌面'
                    },
                    {
                        path : 'CardArray',
                        icon : 'icon-5',
                        title : '牌阵'
                    }
                ],
                activeIndex : 0
            }
        },
        methods:{
            changeIndex:function ( index , path ) {
                this.activeIndex = index;
                this.$router.replace(`/${path}`);
            },
            initIndex:function () {
                var name = this.$router.currentRoute.name;
                for (var i =0 ; i < this.tabList.length ; i++){
                    if ( this.tabList[i].path == name   ) {
                        this.activeIndex = i ;
                        break;
                    }
                }
            }
        },
        created() {
            this.initIndex();
        }
    }
</script>

<style scoped>

</style>
