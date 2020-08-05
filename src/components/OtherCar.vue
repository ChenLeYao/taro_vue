<template>
    <div>
        <h1>{{ name }}</h1>
        <ul>
            <li :key="index" v-for="(   item  , index ) in data ">
                <p>商品名称:{{ item.name }}</p>
                <p>价格:{{ item.price *  item.count  }}</p>
                <p><span @click="add(index)">+</span>数量:{{ item.count }}<span @click="mini(index)">-</span></p>
            </li>
        </ul>
        <p><span>删除</span><span>增加</span></p>
        <p>商品总价{{  total }}</p>
    </div>
</template>

<script>
    export default {
        name: "OtherCar" ,
        props : ['data'],
        data : function () {
            return {
                name :'我是车'
            }
        },
        methods :{
            add( index ){
                this.$emit('add' , { index : index });

            } ,
            mini(index){
                this.$emit('mini' , { index : index });
            }
        },
        computed:{
            total (){
                return this.data.reduce(( total , v ) =>{
                    return total + v.price * v.count
                } , 0 );
            }
        }
    }
</script>

<style scoped>
  ul li {
      text-align: left;
      padding-left: 10px;
      margin-bottom: 10px;
  }
    span {
        cursor: pointer;
        margin-right: 10px;
        color: rebeccapurple;
    }
</style>