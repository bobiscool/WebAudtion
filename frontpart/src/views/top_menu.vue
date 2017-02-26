<!--Created by WuYiPing -->
<template>
    <div>
      <el-menu theme="dark"
               class="el-menu-demo"
               mode="horizontal"
      >
        <el-menu-item index="1" ><router-link to="/">单音</router-link></el-menu-item>


          <el-menu-item index="2" ><router-link to="/multi">多轨</router-link></el-menu-item>


        <el-menu-item index="3"><router-link to="/manageApp">混音</router-link></el-menu-item>
      </el-menu>

      <router-view></router-view>
    </div>
</template>

<script type="text/ecmascript-6">

    export default{
        data(){
            return{

            }
        },
        components:{

        }
    }
</script>
<style lang="scss">
    body{
        background-color:#fff;
    }
</style>
