<template>
    <div>
        <h1>我是一个假的购物车</h1>
        <OtherCar :data="list" @add="onadd" @mini="onmini"/>
    </div>
</template>

<script>
    import OtherCar from './OtherCar';
    export default {
        methods:{
            onadd( data ){
               this.list[data.index].count += 1 ;
            },
            onmini( data ){
                this.list[data.index].count -= 1 ;
            }
        },
        components :{
            OtherCar
        },
        name: "Other" ,
        data : function () {
            return {
                list : [
                    {
                        type : '' ,
                        name :'商品1' ,
                        price :2000 ,
                        count : 1
                    } ,
                    {
                        type : '' ,
                        name :'商品1' ,
                        price :10 ,
                        count : 1
                    },
                    {
                        type : '' ,
                        name :'商品1' ,
                        price : 50 ,
                        count : 1
                    }

                ]
            }
        }
    }
</script>

<style scoped>

</style>