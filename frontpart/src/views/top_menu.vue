<!--Created by WuYiPing -->
<template>
    <div>
      <el-menu theme="dark"
               class="el-menu-demo"
               mode="horizontal"
               :router="router"
      >
        <el-menu-item index="/"
                      :router="router"
        >单音</el-menu-item>


          <el-menu-item index="/multi"
                        :router="router"
          >多轨</el-menu-item>


        <el-menu-item index="/mix"
                      :router="router"
        >混音</el-menu-item>
      </el-menu>

      <router-view></router-view>
    </div>
</template>

<script type="text/ecmascript-6">

    export default{
        data(){
            return{

              router:true

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
