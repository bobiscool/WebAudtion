<!--Created by WuYiPing 波形显示组件-->
<template>
  <div :class="WaveFormClass">
    <!--波形的显示该用什么?来显示 canvas 还是说 svg?  canvas 很恶心  但是能够操作很多 在这里 就使用zrender吧-->
    <canvas :id="WaveCanvasId">
      <!--此处为波形区 具体如何展示 波形  还要 看看zrender -->

    </canvas>

  </div>
</template>

<script type="text/ecmascript-6">
  import Addid from "../../static/js/uid.js"
  import BufferLoader from "../../static/js/BufferLoader.js"
  import paper from 'paper';
  import $Au from '../../static/js/AudioToolKit.js';

  export default{
    data(){
      return {}
    },
    components: {},
    props: {
      WaveCanvasId: {
        type: String,
        default: Addid()
      },
      WaveFormClass: {
        type:String,
        default:"WaveFormDefault"
      }
    },
    created:function(){

    },
    mounted:function () {


    }
  }
</script>
<style lang="scss">
  body {
    background-color: #fff;
  }

  .WaveFormDefault {

    width:500px;
    height:100px;
    background: #7B8D9B;
  }

</style>
