<!--Created by WuYiPing  -->
<!--如果是最低级的组件 最好不要引入其他组件了 -->
<template>
    <button type="button" :class="btnClass" @click="handleClick" ref="button">
        <span v-if="icon" :class="iconComputed"></span>{{text}}
     </button>
</template>

<script type="text/ecmascript-6">

    export default{

        data(){
            return{

            }
        },
      props:{
          text:{
            required:true,
            type:String
          },
          classProps:{
            default:"btn-primary",
            type:String
          },
           Type:{
            default:"btn",
            type:String,
            validator:function (value) {

              return (["btn","funBtn"].indexOf(String(value))!=-1)
            }
           }
          ,
          functionProps:{
            default:function () {
              console.log("我被点击了");
            },
            type:Function
          },
        icon:{
            default:"",
            type:String
        }
      },
      computed:{
        btnClass:function () {
          return  this.Type+" "+this.classProps
        },
        iconComputed:function () {
          if(this.icon){
            return this.icon+" "+"icon";
          }
        }
      },
        components:{

        },
      mounted:function () {
          if(!this.icon){
            this.$refs.button.style.textIndent = "0";
          }else {
            this.$refs.button.style.textIndent = "27px";
          }
      },
      methods:{
        handleClick:function(event) {
        this.$emit("Handleclick",event);
        event.target.style.background="red";
        }
      }

    }
</script>
<style lang="scss" scoped>
    /*为了以后能够凑成一个组件库 就把 default样式文件写到一个style里面了*/

</style>
